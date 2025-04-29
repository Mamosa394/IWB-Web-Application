// queryRoutes.js

import express from 'express';
import Query from '../models/query.js';

const router = express.Router();

// Function to check similarity between messages
function isSimilar(newMessage, existingMessage) {
  const newWords = newMessage.toLowerCase().split(/\W+/);
  const oldWords = existingMessage.toLowerCase().split(/\W+/);
  const common = newWords.filter(word => oldWords.includes(word));
  return common.length >= 3; // Adjust threshold as needed
}

// POST /api/queries — Log a client query with auto-reply and status
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Retrieve past queries that were auto-responded and marked as complete
    const pastQueries = await Query.find({ status: 'complete', isAutoResponded: true });

    let autoReply = '';
    let isAutoResponded = false;
    let status = 'pending';

    // Check for similarity with past queries
    for (const pastQuery of pastQueries) {
      if (isSimilar(message, pastQuery.message)) {
        autoReply = `Auto-reply: ${pastQuery.autoReply || pastQuery.message}`;
        isAutoResponded = true;
        status = 'complete';
        break;
      }
    }

    // Create and save the new query
    const newQuery = new Query({
      name,
      email,
      message,
      status,
      autoReply,
      isAutoResponded,
    });

    const savedQuery = await newQuery.save();
    res.status(201).json(savedQuery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/queries — Retrieve all queries
router.get('/', async (req, res) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 });
    res.json(queries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

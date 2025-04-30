// backend for clients queriesqueryRoutes.js

import express from 'express';
import fs from 'fs';
import path from 'path';
import Query from '../models/query.js';

const router = express.Router();

// Function to check similarity between messages (basic word match)
function isSimilar(newMessage, existingMessage) {
  const newWords = newMessage.toLowerCase().split(/\W+/);
  const oldWords = existingMessage.toLowerCase().split(/\W+/);
  const common = newWords.filter(word => oldWords.includes(word));
  return common.length >= 3; // Threshold of common words
}

// Function to backup queries to local JSON file
function backupQuery(query) {
  const backupPath = path.join('backups', 'queries.json');
  let backupData = [];

  // Read existing backup
  if (fs.existsSync(backupPath)) {
    const fileContent = fs.readFileSync(backupPath, 'utf-8');
    try {
      backupData = JSON.parse(fileContent);
    } catch (err) {
      console.error('Backup file corrupted, creating new one.');
    }
  }

  // Append new query
  backupData.push(query);

  // Write updated backup
  fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2));
}

// POST /api/client-queries
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Find previously completed and auto-responded queries
    const pastQueries = await Query.find({ status: 'complete', isAutoResponded: true });

    let autoReply = '';
    let isAutoResponded = false;
    let status = 'pending';

    // Check for similarity and generate auto-reply if match is found
    for (const past of pastQueries) {
      if (isSimilar(message, past.message)) {
        autoReply = past.autoReply || `Re: ${past.message}`;
        isAutoResponded = true;
        status = 'complete';
        break;
      }
    }

    // Save to MongoDB
    const newQuery = new Query({
      name,
      email,
      message,
      autoReply,
      isAutoResponded,
      status
    });

    const savedQuery = await newQuery.save();

    // Backup to local file
    backupQuery(savedQuery);

    res.status(201).json(savedQuery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/client-queries
router.get('/', async (req, res) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 });
    res.json(queries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

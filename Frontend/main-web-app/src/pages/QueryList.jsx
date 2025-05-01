import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/query.css";

const QueryList = () => {
  const [queries, setQueries] = useState([]); // Store queries fetched from the backend
  const [error, setError] = useState(''); // Handle errors

  // Fetch queries on component mount
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/client-queries');
        setQueries(res.data); // Update the queries state with data from the backend
      } catch (err) {
        setError("Failed to fetch queries.");
        console.error("Fetch error:", err);
      }
    };

    fetchQueries();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="query-list-container">
      <h2 className="query-list-title">Submitted Queries</h2>

      {/* Error handling */}
      {error && <p className="query-error">{error}</p>}

      <ul className="queries-list">
        {queries.length > 0 ? (
          queries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(query => (
            <li key={query._id} className="query-item">
              <p><strong>{query.name}</strong> ({query.email})</p>
              <p><strong>Message:</strong> {query.message}</p>
              {query.autoReply && <p><strong>Auto Reply:</strong> {query.autoReply}</p>} {/* Auto-Reply Displayed Here */}
              <p><strong>Status:</strong> {query.status}</p> {/* Status Displayed Here */}
            </li>
          ))
        ) : (
          <p>No queries submitted yet.</p>
        )}
      </ul>
    </div>
  );
};

export default QueryList;

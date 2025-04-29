import { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/query.css";

const QueryList = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/queries');
        setQueries(res.data);
      } catch (error) {
        console.error('Error fetching queries:', error.message);
      }
    };

    fetchQueries();
  }, []);

  return (
    <div>
      <h2>All Client Queries</h2>
      <ul>
        {queries.map(query => (
          <li key={query._id} style={{ marginBottom: '1rem' }}>
            <p><strong>Name:</strong> {query.name}</p>
            <p><strong>Email:</strong> {query.email}</p>
            <p><strong>Message:</strong> {query.message}</p>
            <p><strong>Status:</strong> <span style={{ color: query.status === 'complete' ? 'green' : 'orange' }}>{query.status}</span></p>
            {query.autoReply && (
              <p><strong>Auto Reply:</strong> {query.autoReply}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryList;

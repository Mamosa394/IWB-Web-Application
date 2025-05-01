import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/query.css";

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [queries, setQueries] = useState([]); // Store queries fetched from the backend

  // Fetch queries on component mount
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/client-queries');
        setQueries(res.data); // Update the queries state with data from the backend
      } catch (err) {
        setError("Failed to fetch previous queries.");
        console.error("Fetch error:", err);
      }
    };

    fetchQueries();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setResponse('');
    setLoading(true);

    try {
      await axios.post('http://localhost:5000/api/client-queries', formData);
      setResponse("Your query was submitted successfully. We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });

      // Fetch updated queries list after submitting
      const updatedQueries = await axios.get('http://localhost:5000/api/client-queries');
      setQueries(updatedQueries.data);

    } catch (err) {
      setError("Failed to submit your query. Please try again later.");
      console.error('Submission error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="query-container">
      <h2 className="query-title">Submit Your Query</h2>
      
      {/* Query Form */}
      <form className="query-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="query-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="query-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="query-textarea"
        />
        <button type="submit" className="query-button">Submit</button>
      </form>

      {/* Loading Spinner */}
      {loading && <div className="loading-spinner">Submitting...</div>}

      {/* Response/Feedback Messages */}
      {response && <p className="query-response"><strong>System:</strong> {response}</p>}
      {error && <p className="query-error">{error}</p>}

      {/* Previous Queries */}
      <h3>Previous Queries</h3>
      <ul className="queries-list">
        {queries.length > 0 ? (
          queries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(query => (
            <li key={query._id} className="query-item">
              <p><strong>{query.name}</strong> ({query.email})</p>
              <p><strong>Message:</strong> {query.message}</p>
              {query.autoReply && <p><strong>Auto Reply:</strong> {query.autoReply}</p>}
              <p><strong>Status:</strong> {query.status}</p>
            </li>
          ))
        ) : (
          <p>No queries submitted yet.</p>
        )}
      </ul>
    </div>
  );
};

export default QueryForm;

import { useState } from 'react';
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

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setResponse('');
    try {
      // Sending the form data to backend
      const res = await axios.post('http://localhost:5000/api/client-queries', formData);
      
      // Check if the response has autoReply or status info
      if (res.data.autoReply) {
        setResponse(`System: ${res.data.autoReply}`);  // Displaying auto-reply message
      } else {
        setResponse("Your query was submitted successfully. We'll get back to you soon.");
      }
      
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError("Failed to submit your query. Please try again later.");
      console.error('Submission error:', err.message);
    }
  };

  return (
    <div className="query-container">
      <h2 className="query-title">Submit Your Query</h2>
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

      {response && <p className="query-response"><strong>System:</strong> {response}</p>}
      {error && <p className="query-error">{error}</p>}
    </div>
  );
};

export default QueryForm;

import { useState } from 'react';
import axios from 'axios';
import "../styles/query.css";

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [response, setResponse] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/client-queries', formData);
      setResponse(res.data.autoReply || 'Your query was submitted successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error.message);
    }
  };

  return (
    <div>
      <h2>Submit Your Query</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
      {response && <p><strong>System:</strong> {response}</p>}
    </div>
  );
};

export default QueryForm;

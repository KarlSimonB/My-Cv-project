import React, { useState } from 'react';
import '../styles/Card.css';  // Reusing card styling

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like sending to an API or an email
    alert('Form submitted');
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name" 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email" 
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="4" 
          required 
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;




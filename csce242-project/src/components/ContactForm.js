import React, { useState } from "react";
import "./styles.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", inquiry: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setMessage(data.message || "Message sent!");
    } catch (err) {
      setMessage("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />

      <label htmlFor="email">Email Address:</label>
      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />

      <label htmlFor="inquiry">Your Inquiry:</label>
      <textarea id="inquiry" name="inquiry" rows="5" required value={formData.inquiry} onChange={handleChange}></textarea>

      <button type="submit">Submit</button>
      {message && <p className="form-message">{message}</p>}
    </form>
  );
};

export default ContactForm;
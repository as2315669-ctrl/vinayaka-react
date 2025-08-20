// src/components/LeadForm.jsx
import React, { useState } from "react";
import "./LeadForm.css";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead Captured:", formData); // ✅ Replace with API call or email service
    setSubmitted(true);
  };

  if (submitted) {
    return <p className="thank-you">✅ Thank you! We’ll contact you soon.</p>;
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <h2>Enquire Now</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Please tell us your requirement"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

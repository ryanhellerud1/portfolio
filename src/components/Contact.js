import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0077b6;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #023e8a;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mrbzwrjo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  if (isSubmitted) {
    return <SuccessMessage>Thank you for your message! I'll get back to you soon.</SuccessMessage>;
  }

  return (
    <ContactForm onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextArea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit">Send Message</Button>
    </ContactForm>
  );
}

export default Contact;
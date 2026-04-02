'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {submitted && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Thank you for your message! We'll get back to you soon.
        </Alert>
      )}
      
      <TextField
        fullWidth
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      
      <TextField
        fullWidth
        label="Your Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      
      <TextField
        fullWidth
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />
      
      <TextField
        fullWidth
        label="Your Message"
        name="message"
        multiline
        rows={6}
        value={formData.message}
        onChange={handleChange}
        required
        sx={{ mb: 3 }}
      />
      
      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SendIcon />}
        fullWidth
      >
        Send Message
      </Button>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3, textAlign: 'center' }}>
        We respect your privacy and will never share your information with third parties.
      </Typography>
    </Box>
  );
}

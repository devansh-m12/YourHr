import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('resume', formData.resume);
  
      try {
          await axios.post('/signup', form, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
          window.location.href = '/thankyou';
      } catch (error) {
          console.error('There was an error submitting the form!', error);
      }
  };

    return (
        <div className="container">
            <h2>Signup for YourHR</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="resume">Upload Resume:</label>
                <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignupForm;

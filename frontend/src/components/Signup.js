import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const FileInput = styled('input')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
    jobPreference: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: { formData } });
  };

  return (
    <StyledContainer component="main" maxWidth="md">
      <Typography component="h1" variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Full Name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="education"
              label="Education"
              name="education"
              multiline
              rows={2}
              value={formData.education}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="experience"
              label="Work Experience"
              name="experience"
              multiline
              rows={3}
              value={formData.experience}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="skills"
              label="Skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="jobPreference"
              select
              label="Job Preference"
              name="jobPreference"
              value={formData.jobPreference}
              onChange={handleChange}
            >
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Upload Resume
            </Typography>
            <FileInput
              accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              id="resume"
              type="file"
              onChange={handleFileChange}
              required
            />
          </Grid>
        </Grid>
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
        >
          Review Application
        </SubmitButton>
      </StyledForm>
    </StyledContainer>
  );
}

export default Signup;
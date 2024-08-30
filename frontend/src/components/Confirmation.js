import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography, Container, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const ConfirmButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state;

  const handleSubmit = async () => {
    const submitData = new FormData();
    for (const key in formData) {
      submitData.append(key, formData[key]);
    }

    try {
      const response = await axios.post('https://yourhr-dkor.onrender.com/api/signup', submitData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <StyledContainer component="main" maxWidth="md">
      <Typography component="h1" variant="h4" gutterBottom>
        Confirm Your Application
      </Typography>
      <StyledPaper elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Name: {formData.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Email: {formData.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Phone: {formData.phone}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Address: {formData.address}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Education: {formData.education}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Experience: {formData.experience}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Skills: {formData.skills}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Job Preference: {formData.jobPreference}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Resume: {formData.resume ? formData.resume.name : 'No file uploaded'}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <div>
        <ConfirmButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Confirm & Submit
        </ConfirmButton>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate('/signup')}
        >
          Edit Application
        </Button>
      </div>
    </StyledContainer>
  );
}

export default Confirmation;
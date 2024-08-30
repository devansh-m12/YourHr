import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

function Home() {
  return (
    <StyledContainer maxWidth="sm">
      <Title variant="h2" component="h1">
        Welcome to YourHR
      </Title>
      <Typography variant="h5" align="center">
        Find your ideal job with YourHR. Sign up to get started!
      </Typography>
      <StyledButton
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/signup"
      >
        Sign Up Now
      </StyledButton>
    </StyledContainer>
  );
}

export default Home;
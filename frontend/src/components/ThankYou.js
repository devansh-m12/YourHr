import React from 'react';
import { Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const ThankYou = () => {
  return (
    <StyledContainer maxWidth="sm">
      <Title variant="h4" component="h1">
        Thank you for signing up!
      </Title>
      <Typography variant="h6" align="center">
        We have received your information and will get back to you soon.
      </Typography>
    </StyledContainer>
  );
};

export default ThankYou;
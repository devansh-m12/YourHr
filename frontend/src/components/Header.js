import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
}));

const LinkButton = styled(Button)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
}));

function Header() {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">
          YourHR
        </Typography>
        <div>
          <LinkButton component={Link} to="/">
            Home
          </LinkButton>
          <LinkButton component={Link} to="/signup">
            Sign Up
          </LinkButton>
        </div>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
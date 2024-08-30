import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Confirmation from './components/Confirmation';
import ThankYou from './components/ThankYou';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // YouTube red
    },
    secondary: {
      main: '#282828', // Dark gray
    },
    background: {
      default: '#F9F9F9', // Light gray background
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
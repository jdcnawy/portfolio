import React from 'react';
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';

const Footer: React.FC = () => {
  const theme = useTheme();
  const sectionColor = theme.palette.background.paper;


  return (
    <footer style={{ backgroundColor: sectionColor, color: theme.palette.text.primary, padding: '1.5rem 0' }}>
      <Container>
        <Typography variant="body2" align="center">
          &copy; 2024 Jaren Nawy. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

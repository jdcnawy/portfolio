import React from 'react';
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';

const About: React.FC = () => {
  const theme = useTheme();
  const sectionColor = theme.palette.background.paper;

  return (
    <section id="about" style={{ padding: '3rem 0', backgroundColor: sectionColor, color: theme.palette.text.primary }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" align="center">
          Hello! I&apos;m Jaren Nawy, a UI/UX designer.
        </Typography>        
        <div style={{ textAlign: 'center' }}>
          <img src="profile-picture-cropped.jpg" alt="Profile" style={{ borderRadius: '70%', width: '300px', height: '300px', padding: '1rem' }} />
        </div>
      </Container>
    </section>
  );
};

export default About;

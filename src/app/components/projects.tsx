import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';
import ProjectCard from './ProjectCard';
import { useTheme } from '@mui/system';

const projectData = [
  {
    title: 'Album Review Website',
    description: 'This is a website that lets the user post album reviews. It also lets them search the Spotify API for albums and automatically import the album information to a post.',
    imageUrl: 'spotify-api.png',
    technologies: ['React.js', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'axios', 'express', 'Spotify Web API', 'Bootstrap','cors','qs'],
    liveDemoLink: 'album-review-website.io'
  },
];

const Projects: React.FC = () => {
  const theme = useTheme();
  const sectionColor = theme.palette.background.paper;


  return (
    <section id="projects" style={{ padding: '3rem0,', backgroundColor: sectionColor, color: theme.palette.text.primary }}>
      
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Projects
        </Typography>
        <Row className="justify-content-center">
          {projectData.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;


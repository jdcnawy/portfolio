import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/system';

const Skills: React.FC = () => {
  const theme = useTheme();
  const sectionColor = theme.palette.background.paper;

  const iconSize = '2rem'; // Adjust the size of the icons as needed

  return (
    <section id="skills" style={{ backgroundColor: theme.palette.background.default, padding: '2rem 0', color: theme.palette.text.primary }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Skills
        </Typography>
        <Row className="justify-content-center">
          {/* Front-end Development */}
          <Col xs={12} md={4}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <Typography variant="h6" gutterBottom>
                Front-end Development
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Tooltip title="React" arrow>
                  <img src="/technologies/react.svg" alt="React" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="Bootstrap" arrow>
                  <img src="/technologies/bootstrap.svg" alt="Bootstrap" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="CSS3" arrow>
                  <img src="/technologies/css3.svg" alt="CSS3" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="HTML5" arrow>
                  <img src="/technologies/html5.svg" alt="HTML5" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="Vite" arrow>
                  <img src="/technologies/vite.svg" alt="Vite" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="Material UI" arrow>
                  <img src="/technologies/material-ui.svg" alt="Material UI" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
              </Stack>
            </div>
          </Col>

          {/* Programming Languages */}
          <Col xs={12} md={4}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <Typography variant="h6" gutterBottom>
                Programming Languages
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Tooltip title="Python" arrow>
                  <img src="/technologies/python.svg" alt="Python" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="JavaScript" arrow>
                  <img src="/technologies/javascript.svg" alt="JavaScript" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="TypeScript" arrow>
                  <img src="/technologies/typescript.svg" alt="TypeScript" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
              </Stack>
            </div>
          </Col>

          {/* App Frameworks */}
          <Col xs={12} md={4}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <Typography variant="h6" gutterBottom>
                App Frameworks
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Tooltip title="Django" arrow>
                  <img src="/technologies/django.svg" alt="Django" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="React" arrow>
                  <img src="/technologies/react.svg" alt="React" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="Next.js" arrow>
                  <img src="/technologies/nextjs-2.svg" alt="Next.js" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="FastAPI" arrow>
                  <img src="/technologies/fastapi.svg" alt="FastAPI" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
              </Stack>
            </div>
          </Col>

          {/* Version Control */}
          <Col xs={12} md={4}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <Typography variant="h6" gutterBottom>
                Version Control
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Tooltip title="Git" arrow>
                  <img src="/technologies/git.svg" alt="Git" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="GitHub" arrow>
                  <img src="/technologies/github.svg" alt="GitHub" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="npm" arrow>
                  <img src="/technologies/npm.svg" alt="npm" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
              </Stack>
            </div>
          </Col>

          {/* Web Hosting/Servers */}
          <Col xs={12} md={4}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <Typography variant="h6" gutterBottom>
                Web Hosting/Servers
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Tooltip title="Express" arrow>
                  <img src="/technologies/expressjs-icon.svg" alt="Express" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="Node.js" arrow>
                  <img src="/technologies/nodejs.svg" alt="Node.js" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="Firebase" arrow>
                  <img src="/technologies/firebase-icon.svg" alt="Firebase" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
              </Stack>
            </div>
          </Col>

          {/* Other */}
          <Col xs={12} md={4}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <Typography variant="h6" gutterBottom>
                Other
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Tooltip title="Docker" arrow>
                  <img src="/technologies/docker.svg" alt="Docker" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="Windows" arrow>
                  <img src="/technologies/windows.svg" alt="Windows" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
                <Tooltip title="VSCode" arrow>
                  <img src="/technologies/vscode.svg" alt="VSCode" style={{ width: iconSize, height: iconSize }} />
                </Tooltip>
              </Stack>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

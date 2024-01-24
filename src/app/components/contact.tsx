import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import { Card, CardContent } from '@mui/material';

const Contact: React.FC = () => {
  const theme = useTheme();
  const sectionColor = theme.palette.background.paper;
  return (
    <section id="contact" style={{ padding: '3rem 0', backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          You can reach me through the form below:
        </Typography>
        <Card style={{ maxWidth: '500px', margin: 'auto', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Form className="mt-4">
              {/* Form fields */}
              <Form.Group controlId="formName">
                <Typography variant="body1">Your Name</Typography>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Typography variant="body1">Email Address</Typography>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Typography variant="body1">Subject</Typography>
                <Form.Control type="text" placeholder="Enter the subject" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Typography variant="body1">Your Message</Typography>
                <Form.Control as="textarea" rows={5} placeholder="Type your message here" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;

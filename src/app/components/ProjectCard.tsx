import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { useTheme } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveDemoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, technologies, liveDemoLink }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ border: '1px solid', borderColor: theme.palette.primary.main, boxShadow: 3, marginBottom: '20px' }}>
      <img src={imageUrl} alt={title} style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Button onClick={handleClickOpen} color="primary">
          View Stack
        </Button>

        {/* Dialog for displaying technologies */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{`${title} Technologies`}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {/* List of technologies */}
              {technologies.map((tech, index) => (
                <Typography key={index} variant="body2">
                  {tech}
                </Typography>
              ))}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            {liveDemoLink && (
          <Button variant="outlined" color="primary" href={liveDemoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </Button>
        )}
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';


interface IconStackProps {
  title: string;
  children: React.ReactNode;
}

const IconStack: React.FC<IconStackProps> = ({ title, children }) => {
  const theme = useTheme();

  return (
    <div className="text-center mb-8" style={{ color: theme.palette.text.primary }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <div className="flex items-center justify-center space-x-4">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="mx-2">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconStack;
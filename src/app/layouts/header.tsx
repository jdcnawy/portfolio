import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import GetAppIcon from '@mui/icons-material/GetApp';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Hidden from '@mui/material/Hidden';
import { useTheme } from '@mui/material';

interface HeaderProps {
  toggleDarkTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkTheme }) => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { icon: <Brightness4Icon />, text: 'Toggle Dark Theme', action: toggleDarkTheme },
    { icon: <LinkedInIcon />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/jaren-nawy-867695229/' },
    { icon: <GitHubIcon />, text: 'GitHub', href: 'https://github.com/jdcnawy' },
    { icon: <EmailIcon />, text: 'Email', href: 'mailto:jarennawy9@gmail.com' },
    // Add other menu items as needed
  ];

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.common.white }}>
              Jaren Nawy
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
            <Hidden mdUp>
              <IconButton color="inherit" onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {/* Render individual icons for larger screens */}
              <IconButton color="inherit" onClick={toggleDarkTheme}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton color="inherit" href="https://www.linkedin.com/in/jaren-nawy-867695229/" target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="https://github.com/jdcnawy" target="_blank">
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" href="mailto:jarennawy9@gmail.com">
                <EmailIcon />
              </IconButton>
              <IconButton color="inherit" href="link-to-download-resume" target="_blank">
                <GetAppIcon />
              </IconButton>
            </Hidden>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} button component="a" href={item.href} target="_blank" onClick={item.action}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;

import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { ChevronRight, LayersOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  borderColor: 'blue',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Appbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          backgroundColor: '#0039a6',
          height: '50px',
          width: '100%',
        }}
      >
        <Typography variant="h7" sx={{ fontWeight: 'bold' }}>
          Top courses from ₹499 when you first visit Edufy
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#E2DFD2', color: 'blue' }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '2rem' }}
            >
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit', }}>
                Edufy
              </Link>
            </Typography>
            
            {isMobile ? (
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="open drawer"
                onClick={handleMenuOpen}
              >
                <SearchIcon />
              </IconButton>
            ) : (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            )}
            {isMobile ? (
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="open drawer"
                onClick={handleMenuOpen}
              >
                <LayersOutlined />
              </IconButton>
            ) : (
              <Button sx={{transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.08)' }}} color="inherit" startIcon={<LayersOutlined />} onClick={handleMenuOpen}>
                Categories
              </Button>
            )}
            <Box sx={{flexGrow:"20"}}></Box>
            
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ScrollLink to="course-section" smooth={true} duration={500}>
                {['Web Development', 'Data Visualization', 'Business Analytics', 'Communication Skills', 'Cybersecurity', 'Business'].map((category) => (
                  <MenuItem key={category} onClick={handleMenuClose}>
                    <Link
                      to="#course-section"
                      style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',padding: '8px 16px', borderBottom:  '1px solid #eee'  }}
                    >
                      {category}
                      <ChevronRight />
                    </Link>
                  </MenuItem>
                ))}
              </ScrollLink>
            </Menu>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit" aria-label="show cart" sx={{  cursor :"pointer" ,transition: 'all 0.3s ease-in-out', '&:hover': {backgroundColor: 'primary.dark',color: 'white'},}}>
              <ShoppingCartIcon />
            </IconButton>
            <Box sx={{ flexGrow: 0.4 }} />
            <Button variant="outlined" color="inherit" sx={{ width : "7vw", cursor :"pointer" ,transition: 'all 0.3s ease-in-out', '&:hover': {backgroundColor: 'primary.dark',color: 'white'},}}>
              Log In
            </Button>
            <Box sx={{ flexGrow: 0.4 }} />
            <Button variant="outlined" color="inherit" sx={{ width : "7vw", cursor :"pointer" ,transition: 'all 0.3s ease-in-out', '&:hover': {backgroundColor: 'primary.dark',color: 'white'},}}>
              Sign In
            </Button>
            <Box sx={{ flexGrow: 0.05 }} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

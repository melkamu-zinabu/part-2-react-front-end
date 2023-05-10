import React, { useEffect, useState } from 'react';
import { AppBar, Autocomplete, Box, IconButton, Menu, MenuItem, Tab, Tabs, TextField, Toolbar } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { getallmovie } from '../api-helper/api-helper';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const dummyarray = ['memory', 'hello', 'fiker'];

function Header() {
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    try {
      getallmovie().then((res) => {
        console.log(res.data.movie);
        setMovies(res.data.movie);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{ bgcolor: '#345678' }} position="sticky">
      <Toolbar>
        <Box display="flex" alignItems="center" width={{ xs: 'auto', md: '20%' }}>
          <MovieIcon />
        </Box>
        <Box width={{ xs: '50%', md: '30%' }} margin="auto">
          <Autocomplete
            freeSolo
            options={movies && movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} label="Search movie" sx={{ color: 'red' }} />
            )}
          />
        </Box>
        <Box display={{ xs: 'flex', md: 'none' }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem component={Link} to="/admin" onClick={handleMenuClose}>
              Admin
            </MenuItem>
            <MenuItem component={Link} to="/user" onClick={handleMenuClose}>
              User
            </MenuItem>
            <MenuItem component={Link} to="/movie" onClick={handleMenuClose}>
              Movie
            </MenuItem>
            <MenuItem component={Link} to="/auth" onClick={handleMenuClose}>
              Auth
            </MenuItem>
          </Menu>
        </Box>
        <Box display={{ xs: 'none', md: 'flex' }}>
          <Tabs textColor="white" indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
            <Tab component={Link} to="/admin" label="Admin" />
            <Tab component={Link} to="/user" label="User" />
            <Tab component={Link} to="/movie" label="Movie" />
            <Tab component={Link} to="/auth" label="Auth" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header

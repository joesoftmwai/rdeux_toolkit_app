import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CollectionsBookmark from '@mui/icons-material/CollectionsBookmark';

const Header = () => {
  const  navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" style={{ background: '#FFF' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <CollectionsBookmark />
          </IconButton>
          <Typography sx={{ flexGrow: 1, fontWeight: 800,}}>
            <Link to="/" className='color-primary'> Goal Setter</Link>
          </Typography>
          
          <Button 
            sx={{ textTransform: 'capitalize', mx:2 }}
            size="medium" 
            color='primary'
            onClick={() => navigate('/signin')}>
              Sign in
          </Button>
          <Button 
            sx={{ textTransform: 'capitalize' }} 
            variant="contained" 
            size="medium" 
            color='primary'
            disableElevation
            onClick={() => navigate('/signup')}>
              Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
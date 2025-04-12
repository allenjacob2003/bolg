import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar    sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" >
          Blog
        </Typography>
        
              <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 100 }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', marginLeft: 100 }}>
                  HOME
                </Link>
                <Link to="/Add" style={{ textDecoration: 'none', color: 'white', marginLeft : 150 }}>
                  ADD BLOG
                </Link>
                </Box>
        </div>
             
        
        </Toolbar>
        </AppBar>

      
    </div>
  )
}

export default Navbar

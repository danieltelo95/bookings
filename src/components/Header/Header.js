import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/ajugarlogo.png'


const pages = ['Canchas'];
const settings = [
  {name: 'Iniciar sesión', path: '/sign-in'},
  {name: 'Registrarse', path: '/sign-up'}
];
const settingsAdmin = [
  {name: 'Panel de control', path: '#'},
  {name: 'Cerrar sesión', path: '#'}
];
const settingsRegularUser = [
  {name: 'Mis reservas', path: '#'},
  {name: 'Perfil', path: '#'},
  {name: 'Cerrar sesión', path: '#'}
];

const ResponsiveAppBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
              key={page}
              sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 3, display: 'flex', justifyContent: 'center' }}>
            <Link to='/'>
              <img src={logo} alt='logo' 
                style={{width: '5rem', height: 'auto', margin: '1rem'}}  
              />            
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0, display: {xs: 'none', md: 'flex'} }}>
              {settings.map((setting) => (
                <Button
                  key={setting.name}
                  component={Link}
                  to={setting.path}
                  sx={{my: 2, color: 'white', display: 'block'}}
                >
                  {setting.name}
                </Button>
              ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default ResponsiveAppBar;
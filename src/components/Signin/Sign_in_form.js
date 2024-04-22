import React from "react";
import { Box, TextField, Button, Grid, Link } from '@mui/material';



const Sign_in_form = ({ onSubmit }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    onSubmit(email, password)
  };

  return(
    <Box component='form' onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
      >
        Iniciar sesión
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href='#' variant="body2">
            Olvidé mi contraseña
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"No tienes cuenta? Regístrate"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  )

}

export default Sign_in_form;
import React, { useState } from "react";
import { Box, TextField, Button, Grid, Link, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Sign_up_form = ({ onSubmit }) => {

  const[role, setRole] = useState("regular");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const isAdmin = role === 'admin';
    onSubmit(email, password, isAdmin);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  }
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
      <FormControl fullWidth margin="normal" required>
        <InputLabel id="role-label">Tipo de usuario</InputLabel>
        <Select 
          labelId='role-label'
          id='role'
          name='role'
          value={role}
          onChange={handleRoleChange}
        >
          <MenuItem value='admin'>Administrador de canchas</MenuItem>
          <MenuItem value='regular'>Usuario Regular</MenuItem>
        </Select>
      </FormControl>
      <Button
        type="submit"
        fullWidth
        variant="contained"
      >
        Registrarme
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href='#' variant="body2">
            Olvidé mi contraseña
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Ya tienes cuenta? Inicia sesión"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  )

}

export default Sign_up_form;
import React from "react";
import Box from '@mui/material/Box';
import Sign_in_form from "./Sign_in_form";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const defaultTheme = createTheme();

const LoginForm = () => {

    const handleSubmit = async (email, password) => {
        const auth = getAuth();
    
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user
            console.log('Inicio de sesión exitoso: ', user);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error al iniciar sesión:', errorCode, errorMessage);           
        }
    };
    

    return (    
        <ThemeProvider theme={defaultTheme}>
            <Grid container componente="main">
                <Box 
                    sx= {{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m:1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>   
                <Typography component='h1' variant='h5'>
                    Iniciar sesión
                </Typography>
                <Sign_in_form onSubmit={handleSubmit}/>
                </Box>                    
            </Grid>

        </ThemeProvider>        
    )
}

export default LoginForm
import React from "react";
import Box from '@mui/material/Box';
import Sign_in_form from "./Sign_in_form";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import backgroundImage from '../../assets/images/camp_nou.jpg'
import { blueGrey, red } from "@mui/material/colors";

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

            <Grid container componente="main" sx={ {height: '100vh'}}>
                <Grid 
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} 

                />
                <Grid 
                    item 
                    xs={56} 
                    sm={8} 
                    md={5} 
                    component={Paper} 
                    elevation={6}
                    square
                    sx={{
                        bgcolor: '#50bbcc',
                        opacity: 0.5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                    }}
                >
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
            </Grid>

        </ThemeProvider>        
    )
}

export default LoginForm
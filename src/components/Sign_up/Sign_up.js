import React from "react";
import Sign_up_form from "./Sign_up_form";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"

const defaultTheme = createTheme();

const SignInSide = () => {

    const handleSubmit = async (email, password) => {
        const auth = getAuth();

        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Usuario creado exitosamente
            const user = userCredential.user;
            console.log('Usuario creado: ', user);
        } catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Error al crear usuario: ', errorCode, errorMessage);
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
                    Registrarme
                </Typography>
                <Sign_up_form onSubmit={handleSubmit}/>
                </Box>                    
            </Grid>

        </ThemeProvider>
    )
}

export default SignInSide;


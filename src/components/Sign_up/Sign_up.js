import React from "react";
import Sign_up_form from "./Sign_up_form";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { Navigate, useNavigate } from "react-router-dom";
import { doc, setDoc, getFirestore} from 'firebase/firestore';

const defaultTheme = createTheme();

const SignUpSide = () => {
    
    const navigate = useNavigate()
    const handleSubmit = async (email, password, isAdmin) => {
        const auth = getAuth();

        try{
            //Crear usuario en Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            //Crear documento de usuario en Firestore
            const db = getFirestore();
            const userDocRef = doc(db, 'usuarios', user.uid);

            //Guardar informacion del usuario en Firestore
            await setDoc(userDocRef, {
                nombre: "",
                correo: email,
                isAdmin: isAdmin
            });

            navigate('/')
            console.log('Usuario creado: ', user);
            console.log('Es admin: ', isAdmin);
            console.log(userDocRef);


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

export default SignUpSide;


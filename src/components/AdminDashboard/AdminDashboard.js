import { addDoc, collection } from "firebase/firestore";
import { Box, TextField, Button } from '@mui/material';
import { db } from "../../firebaseConfig";
import React, { useState } from "react";

const NewCourtForm = () => {

    const [courtName, setCourtName] = useState('');
    const [courtLocation, setCourtLocation] = useState('');
    const [courtPrice, setCourtPrice] = useState('');
    const [courtAvailability, setCourtAvailability] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newCourt = {
            nombre: courtName,
            ubicacion: courtLocation,
            precio: courtPrice,
            disponibilidad: courtAvailability
        };

        try {
            //Agrega el documento de la nueva cancha a la coleccion 'canchas' en Firestore
            const docRef = await addDoc(collection(db, 'canchas'), newCourt);
            console.log('Cancha creada con Id: ', docRef.id);

            //Limpiar los campos del form despues de enviarlos
            setCourtName('');
            setCourtPrice('');
            setCourtLocation('');
            setCourtAvailability('');
        } catch (error) {
            console.error('Error al agregar la cancha: ', error);
        }
    };

    return (
        <Box component='form' onSubmit={handleSubmit}>
            <TextField
                margin='normal'
                required
                fullWidth
                label='Nombre de la Cancha'
                value={courtName}
                onChange={(e) => setCourtName(e.target.value)}
            />
               <TextField
                margin='normal'
                required
                fullWidth
                label='Ubicacion'
                value={courtLocation}
                onChange={(e) => setCourtLocation(e.target.value)}
            />
               <TextField
                margin='normal'
                required
                fullWidth
                label='Precio'
                type='number'
                value={courtPrice}
                onChange={(e) => setCourtPrice(e.target.value)}
            />
               <TextField
                margin='normal'
                required
                fullWidth
                label='Disponibilidad'
                helperText="Ejemplo: Lunes: 8:00-10:00, Martes: 9:00-11:00, ..."
                value={courtAvailability}
                onChange={(e) => setCourtAvailability(e.target.value)}
            />
            <Button
                type='submit'
                fullWidth
                variant='contained'
            >
                Crear Cancha
            </Button>
        </Box>
    );
};

export default NewCourtForm
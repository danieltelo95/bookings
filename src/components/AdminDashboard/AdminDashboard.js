import React, { useState } from "react";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import { db } from "../../firebaseConfig";
import AdminTable from "./AdminTable";

const NewCourtForm = () => {

    const [courtName, setCourtName] = useState('');
    const [courtLocation, setCourtLocation] = useState('');
    const [courtPrice, setCourtPrice] = useState('');
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [data, setData] = useState([])


    const availableSlots = [
        "08:00 - 09:00",
        "09:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
        "16:00 - 17:00",
        "18:00 - 19:00",
        "20:00 - 21:00",
        "22:00 - 23:00",
    ]

    const handleSelectSlot = (slot) => {
        setSelectedSlots(prevSlots => {
            const index = prevSlots.indexOf(slot)
            if (index == -1){
                return [...prevSlots, slot];
            } else {
                return prevSlots.filter(item => item !== slot);
            }
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newCourt = {
            nombre: courtName,
            ubicacion: courtLocation,
            precio: courtPrice,
            disponibilidad: selectedSlots.join(', ')
        };

        try{
            const docRef = await addDoc(collection(db, 'canchas'), newCourt)

            setData(prevData => [...prevData, {id: docRef.id, ...newCourt}]);

            setCourtName('');
            setCourtLocation('');
            setCourtPrice('');
            setSelectedSlots([]);
        } catch(error){
            console.error('Error al agregar la cancha: ', error)            
        }
    };


    return (
        <><Box component='form' onSubmit={handleSubmit}>
            <TextField
                margin='normal'
                required
                fullWidth
                label='Nombre de la Cancha'
                value={courtName}
                onChange={(e)=> setCourtName(e.target.value)}
                />
            <TextField
                margin='normal'
                required
                fullWidth
                label='Ubicacion'
                value={courtLocation}
                onChange={(e)=> setCourtLocation(e.target.value)}
                />
            <TextField
                margin='normal'
                required
                fullWidth
                label='Precio'
                type='number'
                value={courtPrice}
                onChange={(e)=> setCourtPrice(e.target.value)}
                />
            <Typography variant='h6'>
                Horarios disponibles
            </Typography>
            <Grid container spacing={2}>
                {availableSlots.map(slot => (
                    <Grid item key={slot}>
                        <Button
                            variant={selectedSlots.includes(slot) ? 'contained' : 'outlined'}
                            onClick={()=> handleSelectSlot(slot)}
                        >
                            {slot}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Button
                type='submit'
                fullWidth
                variant='contained'
            >
                Crear Cancha
            </Button>
        </Box>
            {<AdminTable data={data} setData={setData} />}
        </>
    );
};

export default NewCourtForm
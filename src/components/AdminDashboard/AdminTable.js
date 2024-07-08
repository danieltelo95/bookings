import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Button, Modal, Box, TextField, FormControlLabel, Checkbox } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


const AdminTable = () => {

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [availability, setAvailability] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, 'canchas'));
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({id: doc.id, ...doc.data()});
            });
            setData(documents);
        };
        fetchData();
    }, []);

    const handleOpen = (row) => {
        setSelectedRow(row);
        setAvailability(row.disponibilidad)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedRow(null)
        setAvailability([])
    }

    const handleSave = async () => {
        if (selectedRow) {
            const docRef = doc(db, 'canchas', selectedRow.id);
            await updateDoc(docRef, { disponibilidad: availability });
            setData(data.map(item => item.id === selectedRow.id ? { ...item, disponibilidad: availability } : item));
        }
        handleClose();
    };
    

    const handleAvailabilitySlots = (event) => {
        const { value, checked } = event.target;
    
        setAvailability(prev => {
            if (checked) {
                return [...prev, value];
            } else {
                return prev.filter(item => item !== value);
            }
        });
    };
    

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
    ];

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'nombre', headerName: 'Nombre', width: 150 },
        { field: 'ubicacion', headerName: 'Ubicación', width: 150 },
        { field: 'precio', headerName: 'Precio', width: 150 },
        { field: 'disponibilidad', headerName: 'Disponibilidad', width: 300 },
        { field: 'editar', headerName: 'Editar', width: 300,
            renderCell: (params) => (
                <Button
                    startIcon={<EditIcon />}
                    onClick={() => handleOpen(params.row)}
                >
                    Editar
                </Button>
            ) 
        },
    ]    
    return (
        <div style={{height: 400, width: '100%'}}>
            {data.length > 0 ? (
                <DataGrid
                rows={data}
                columns={columns}
                    pageSize={5}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            ):(
                <p> cargando...</p>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                
            >
                 <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                <h2 id='edit-availability'>Editar Disponibilidad</h2>
                {availableSlots.map(slot => (
                    <FormControlLabel
                        key={slot}
                        control={
                            <Checkbox
                                checked={availability.includes(slot)}
                                onChange={handleAvailabilitySlots}
                                value={slot}
                            />
                        }
                        label={slot}
                    />
                ))}
                <Button onClick={handleSave} variant="contained">
                    Guardar
                </Button>
                </Box>
            </Modal>       
        
        </div>
    );    
};

export default AdminTable
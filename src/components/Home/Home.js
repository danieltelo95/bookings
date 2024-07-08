import React from 'react';
import dayjs from 'dayjs';
import backgroundPhoto from '../../assets/images/sintetica.jpg';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)), url(${backgroundPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '75vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '5rem',
        borderColor: 'green',
        border: '1px solid black'
      }}
    >
      <Container sx={{ width: '45%', marginLeft: '6rem'}} >
        <Box 
          sx={{ 
            margin: '1rem',
            padding: '1rem', 
            textAlign: 'center', 
          }}         
        >
          <Typography 
            variant='h3' 
            component="h1" 
            align='right'
            gutterBottom
            color='#195a2c'
            fontFamily='Editorial_Today_Extrabold'
            sx={{ whiteSpace: 'nowrap' }}
          >
            Elige la fecha y la hora
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label=""
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </Box>
      </Container>
    </div>
  );
}

export default Home;

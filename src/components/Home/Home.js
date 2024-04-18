import React from 'react'
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Home = () => {

  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

  return (
    <div>
        <h1>Elige la fecha y la hora</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Controlled picker"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
    </div>
  )
}

export default Home
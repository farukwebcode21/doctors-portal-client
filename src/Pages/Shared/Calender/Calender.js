import React from 'react'
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextFields  from '@mui/material/TextField';


const Calender = ({date, setDate}) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
        value={date}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextFields {...params}/>}
      />
    </LocalizationProvider>
    )
}

export default Calender

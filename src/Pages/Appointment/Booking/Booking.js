import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    const { name, time, space} = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}}>
                <Typography sx={{color: 'info.main'}} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="P">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button onClick={handleBookingOpen}  variant="contained">BOOK APPOINTMENT</Button>
            </Paper>
        </Grid>
            <BookingModal
                booking={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                date={date}
            />
        </>
    )
}

export default Booking

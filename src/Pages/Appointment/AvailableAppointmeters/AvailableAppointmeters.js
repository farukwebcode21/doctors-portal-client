import { Container, Grid, Typography} from '@mui/material'
import React from 'react'
import Booking from '../Booking/Booking'

const bookings=[
    {
        id: 1,
        name: 'Teeth Orthdonics',
        time: '08.00 AM - 9.00 AM',
        space: 20,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 3,
        name: 'Treeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 25,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 15,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 5,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 AM - 08.00 PM',
        space: 10,
    }
]

const AvailableAppointmeters = ({date}) => {
    return (
        <Container>
            <Typography py={3} sx={{color: 'info.main'}} variant="h5">Avaialble Appintment on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                    />)
                }
            </Grid>
        </Container>
    )
}

export default AvailableAppointmeters

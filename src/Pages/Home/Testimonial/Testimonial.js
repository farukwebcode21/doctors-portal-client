import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Testimonial = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h6" component="div">
                        TESTIMONIAL
                    </Typography>
                   <Typography variant="h4" component="div">
                       What's Our Patients <br/> Says
                    </Typography>
              </Grid>
            </Grid>
        </Container>
    )
}

export default Testimonial

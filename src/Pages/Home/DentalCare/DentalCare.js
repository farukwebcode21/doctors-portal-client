import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import treatment from '../../../images/treatment.png'

const DentalCare = () => {
    return (
        <Container sx={{mt:10}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{height:450, marginLeft:20}}
                        src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}
                >
                    <Box>
                        <Typography variant="h4" component="div">
                            Exceptional Dental <br/> Care, on Your Terms
                        </Typography>
                        <Typography variant="subtitle1" sx={{my:5}} component="div">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus saepe alias placeat nulla autem rem culpa, maxime, cumque est natus nesciunt repellendus enim asperiores cupiditate deleniti voluptates possimus fugiat consectetur distinctio eaque. Est non inventore voluptas eaque dolorem dolore corrupti doloribus aspernatur corporis! Explicabo repellendus doloribus aliquam unde deserunt error cum corrupti, non sint esse quia nobis natus libero. Sapiente corporis nam quidem eligendi animi,
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DentalCare

import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png';

const services = [

    {
      name: 'Fluoride Treatment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consectetur? Iste nisi nesciunt perferendis similique corrupti',
      img: fluoride
  },

  {
    name: 'Cavity Treatment',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consectetur? Iste nisi nesciunt perferendis similique corrupti ',
    img: cavity
  },
  {
    name: 'Whitening Treatment',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consectetur? Iste nisi nesciunt perferendis similique corrupti',
    img: whitening
  }

]



const Services = () => {
    return (
            <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography sx={{fontWeight:500, color:'success.main', m:2}} variant="h6" component="div">
            OUR SERVICES
          </Typography>
          <Typography sx={{fontWeight:600, m:2}} variant="h4" component="div">
            Services We Provide
          </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {
                services.map(service => <Service
                  service={service}
                  key={service.name}
                />)
                    }
                </Grid>
              </Container>
            </Box>
    )
}

export default Services

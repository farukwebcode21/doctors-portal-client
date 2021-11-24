import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';



const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ border: 0, boxShadow: 0 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        style={{width: 'auto', height: '80px', margin: '0 auto'}}
                        image={img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default Service

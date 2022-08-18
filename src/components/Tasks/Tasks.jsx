import React from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import VerticalListItem from './VerticalListItem/VerticalListItem'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Header from './../Header'



const Tasks = (props) => {
    return (
      <Box>
			<Header/>
      <Grid container spacing={0}>
       <Container sx={{mt: '2rem', mb: '3rem' }}>
           
       <Card variant="outlined"  >
 <Box  sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="250"
                    style={{ backgroundImage: 'url(https://source.unsplash.com/random)'}}
                >
                </CardMedia>
                <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'rgba(0, 0, 0, 0)',
        color: 'white',
        padding: '10px',
      }}
    >
                <Typography
                        variant='h3'
                        color='inherit'
                    >
                        Схемотехніка
                </Typography>
                </Box>
                </Box>
            </Card>

          <VerticalListItem />
          <VerticalListItem />
          <VerticalListItem />
          <VerticalListItem />
          <VerticalListItem />
   
       </Container>
       </Grid>
       </Box>
    )
    }
    
    export default Tasks;
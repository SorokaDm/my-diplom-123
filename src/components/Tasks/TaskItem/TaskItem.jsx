import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { borders } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import Header from './../../Header'






const TaskItem = () => {
    return (
      <Box>
			<Header/>
        <Container>
        <Grid container columnSpacing={0}>
        <Grid item xs={8.5}> 
        <Box>
        <Container sx={{mt: '1.5rem', mb: '1.5rem' }} height='3rem'>     
            <Card sx={{height: '100%', width: '100%'}} elevation={0} >
            <Grid container spacing={0}>
        <Grid item xs={1}>
            <Avatar sx={{ bgcolor: 'black',}} >
                    <AssignmentIcon />
            </Avatar>
            </Grid>
            <Grid item xs={11}>
            <Typography gutterBottom variant="h4" component="div"  >
          Завдання...
        </Typography>
        <Typography variant="body2" color='black'>
                        
        </Typography>
        <Divider style={{ background: 'black' }} sx={{mt: '1rem'}}/>
        <Typography sx={{mt: '1rem'}} variant="body2" color='black' multiline>
        Частина 7. Властивості, застосування шифру
        </Typography>
          </Grid>
          </Grid>
          
            </Card>
            </Container>
            </Box>
        </Grid>
        <Grid item xs={3.5}> 
        <Container sx={{mt: '1.5rem', mb: '1.5rem' }}>     
        <Card sx={{height: '100%', width: '100%'}} elevation={3} >
        <CardContent>
        <Typography gutterBottom variant="h5" component="div"  >
          Мої завдання
        </Typography>
        </CardContent>
        <CardActions>
        <Stack>
        <Container>
        <Button style={{ color: 'black', borderColor: 'black' }} sx={{width: '100%'}}  variant="outlined" component="label">
            Завантажити файл
            <input type="file" hidden />
        </Button>
        <Button style={{ background: 'black' }} sx={{width: '100%', mt: '1rem', mb: '1rem'}} variant="contained" >Надіслати</Button>
        </Container>
        </Stack>
        </CardActions>
            </Card>
            </Container>

        </Grid>
        </Grid>
        </Container>
        </Box>
    );
};

export default TaskItem;
import React, { useCallback, useContext, useEffect, useState } from 'react'
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
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';






const MyTaskItem = (props) => {
    const [tasks, setTasks] = useState([])
	const {userId} = useContext(AuthContext)

    const getTasks = useCallback( async () => {
		try {
			await axios.get('https://my-diplom-123.herokuapp.com/api/getTask', {
				headers: {'Content-Type': 'application/json'},
				params: {userId}
			})
			.then((response) => setTasks(response.data))
		} catch (error) {
			console.log(error)
		}
	}, [userId])

	useEffect(() => {
		getTasks()
	}, [])

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
            {tasks.taskName}
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
        
            </Card>
            </Container>

        </Grid>
        </Grid>
        </Container>
        </Box>
    );
};

export default MyTaskItem;
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
import TextField from '@mui/material/TextField';
import NotesIcon from '@mui/icons-material/Notes';
import Header from '../../Header';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';




const CreateTask = (props) => {

    const [taskName, setTaskName] = useState('')
    const [taskContent, setTaskContent] = useState('')
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

	const createTask = useCallback( async () => {
		if(!taskName && !taskContent) return null
		try {
			await axios.post('https://my-diplom-123.herokuapp.com/api/addTask', {taskName, taskContent, userId}, {headers: {'Content-Type': 'application/json'}})
			.then((response) => {
				setTasks([...tasks], response.data)
				getTasks()
			})
		} catch (error) {
			console.log(error)
		}
	}, [taskName, taskContent, userId, tasks, getTasks]); 



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
            <Avatar sx={{ bgcolor: 'white', color:'black'}} >
                    <AssignmentIcon />
            </Avatar>
            <Avatar sx={{ bgcolor: 'white', color:'black', mt: '2rem'}} >
                    <NotesIcon />
            </Avatar>
            </Grid>
            <Grid item xs={11}>
            <TextField onChange={(e) => setTaskName(e.target.value)} value={taskName}  sx={{width: '100%'}} id="filled-basic" label="Назва" variant="filled" />
            <TextField onChange={(e) => setTaskContent(e.target.value)} value={taskContent} sx={{width: '100%', mt: '1rem'}}
          id="filled-multiline-static"
          label="Інструкції"
          multiline
          rows={5}
          variant="filled"
        />
          </Grid>
          </Grid>
          
            </Card>
            </Container>
            </Box>
        </Grid>
        <Grid item xs={3.5}> 
        <Container sx={{mt: '1.5rem', mb: '1.5rem' }}>     
        <Card sx={{height: '100%', width: '100%'}} elevation={1} >
        <CardActions>
        <Stack>
        <Container>
        <Button onClick={createTask} style={{ background: 'black' }} sx={{width: '100%', mt: '1rem', mb: '1rem'}} variant="contained" component={NavLink} to="/myTasksList">Створити завдання</Button>
        <Button style={{ color: 'black', borderColor: 'black' }} sx={{width: '100%', mb: '1rem'}}  variant="outlined" component="label">
            Прикріпити файл
            <input type="file" hidden />
        </Button>
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

export default CreateTask;
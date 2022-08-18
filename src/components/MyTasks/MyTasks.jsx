import React, { useCallback, useContext, useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TeachersVerticalListItem from './TeachersVerticalListItem/TeachersVerticalListItem'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import VerticalListItem from './../Tasks/VerticalListItem/VerticalListItem';
import Header from './../Header'
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useParams } from "react-router-dom";



const MyTasks = (props) => {

  const [tasks, setTasks] = useState([])
	const {userId} = useContext(AuthContext)

 /* const {token} = useContext(AuthContext)
  const [link, setLink] = useState(null)
	const linkId = useParams().index

  const getLink = useCallback( async () => {
    try {
      const fetched = await axios.get(`http://localhost:1337/api/link/${linkId}`, {
				headers: {'Content-Type': 'application/json'}
			})
      setLink(fetched)
    } catch (error) {
      
    }
  }, [token, linkId])

  useEffect(() => {
    getLink()
  }, [getLink])*/

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

  let tasksElement = tasks.map((tasks, index) => <TeachersVerticalListItem taskName={tasks.taskName}/>)

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

            <Grid item xs={12}> 
        <Box>
        <Container sx={{mt: '1.5rem', mb: '1.5rem' }} height='3rem'>     
          <Button style={{ background: 'black' }} sx={{width: '100%', height:'3rem', mt: '0.5rem', mb: '0.5rem'}} component={NavLink} to="/createTask" variant="contained" >Додати завдання</Button>
            </Container>
            </Box>
        </Grid>

      {tasksElement}
   
       </Container>
       </Grid>
       </Box>
    )
    }
    
    export default MyTasks;
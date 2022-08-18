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
import Box from '@mui/material/Box';
import { borders } from '@mui/system';
import axios from 'axios';
import { AuthContext } from './../context/AuthContext';








const CoursesItem = (props) => {
    const [courses, setCourses] = useState([])
	const {userId} = useContext(AuthContext)
	

	const getCourses = useCallback( async () => {
		try {
			await axios.get('https://my-diplom-123.herokuapp.com/api/link', {
				headers: {'Content-Type': 'application/json'},
				params: {userId}
			})
			.then((response) => setCourses(response.data))
		} catch (error) {
			console.log(error)
		}
	}, [userId])

	useEffect(() => {
		getCourses()
	}, [])
    return (
        <Grid item xs={12} md={3}>   
        <Box >
            <Card variant="outlined" sx={{
                ':hover': {
                boxShadow: 4,
                },
                height: '100%'
            }}
            >
                
                <CardMedia
                    component="img"
                    height="140"
                    style={{ backgroundImage: 'url(https://source.unsplash.com/random)'}}
                >
                </CardMedia>
                <CardContent>
                <Link component={NavLink} key={userId} to={`/myTasksList/${userId}`} underline="hover">
                <Typography
                        variant='h6'
                        component='h3'
                        color='black'
                        underline="hover"
                    >
                        {props.coursesText}
                </Typography>
                </Link>
                <br/>
                <Link href="#" underline="hover">
                <Typography variant='caption' size='small' color='black'>
                        
                    </Typography>
                 </Link>
                 </CardContent>
    
            
                
            </Card>
            </Box>   
        </Grid>
    );
};

export default CoursesItem;
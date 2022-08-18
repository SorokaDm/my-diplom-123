import React, { useCallback, useContext, useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import CoursesItem from '../components/CoursesItem';
import Container from '@mui/material/Container';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';






const Dashboard = () => {
	const navigate = useNavigate();

	const [quote, setQuote] = useState('')
	const [tempQuote, setTempQuote] = useState('')

	const [text, setText] = useState('')
	const [courses, setCourses] = useState([])
	const {userId} = useContext(AuthContext)
	

	const getCourses = useCallback( async () => {
		try {
			await axios.get('https://my-diplom-123.herokuapp.com/api/get', {
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

	const createCourse = useCallback( async () => {
		if(!text) return null
		try {
			await axios.post('https://my-diplom-123.herokuapp.com/api/add', {text, userId}, {headers: {'Content-Type': 'application/json'}})
			.then((response) => {
				setCourses([...courses], response.data)
				setText('')
				getCourses()
			})
		} catch (error) {
			console.log(error)
		}
	}, [text, userId, courses, getCourses]); 



/*
	async function populateQuote() {
		const req = await fetch('http://localhost:1337/api/quote', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(data.quote)
		} else {
			alert(data.error)
		}
	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem('token')
				navigate('/', { replace: true })
			} else {
				populateQuote()
			}
		}
	}, [])

	async function updateQuote(event) {
		event.preventDefault()

		const req = await fetch('http://localhost:1337/api/quote', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				quote: tempQuote,
			}),
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setQuote(tempQuote)
			setTempQuote('')
		} else {
			alert(data.error)
		}
	}
*/
let coursesElement = courses.map((courses, index) => <CoursesItem coursesText={courses.text}/>)

	return (
			<Box>
			<Header/>
			<Box onSubmit={e => e.preventDefault()}>

									<Container sx={{mt: '3rem', mb: '3rem'}}>
									<Grid container spacing={3} rowSpacing={5}>
									{coursesElement}
									</Grid>
									</Container>
						
				</Box>
				</Box>
				
	)
}

export default Dashboard

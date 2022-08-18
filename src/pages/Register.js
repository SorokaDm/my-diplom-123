import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';



const theme = createTheme();

function Registration() {


  const [forms, setForm] = useState({
    email: '',
    password: ''
})


  const changeHandler = (event) => {
    setForm({...forms, [event.target.name]: event.target.value})
    console.log(forms)
}

const registerHandler = async () => {
    try {
        await axios.post('https://my-diplom-123.herokuapp.com/api/register', {...forms}, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => console.log(response))
    } catch (error) {
        console.log(error)
    }
}

	return (
		<div>
			
	<ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
              <SchoolOutlinedIcon />
            </Avatar>
            <br/>
            <Typography component="h1" variant="h4">
            KEMKbridge
            </Typography>
            <Box component="form" noValidate onSubmit={e => e.preventDefault()} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus

				onChange={changeHandler}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus

				onChange={changeHandler}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
		
				onChange={changeHandler}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                component={NavLink} to="/login"
				        onClick={registerHandler}
              >
                Зареєструватися
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                <Typography variant="body2">
                  Уже є акаунт?⠀
                  <NavLink to="/login">
                    {"Увійти"}
                </NavLink>
                </Typography>
                </Grid>
                </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>


		</div>
	)
}

export default Registration

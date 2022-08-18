import { Toolbar, Typography, AppBar, IconButton } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Backdrop from '@mui/material/Backdrop';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import {addPostActionCreator, updateNewPostTextActionCreator } from '../../State/profileReducer'
//import ListItem from '../Courses/List/ListIstem/ListsItem'
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import NavbarItem from './NavbarItem'
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';



const Header = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [logOut, setLogOut] = React.useState(false);
  const [openNav, setOpenNav] = React.useState(false);

  const {logout, isLogin} = useContext(AuthContext)

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


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
    setAnchorEl(null);
    
  };

  const handleProfile = (event) => {
    setLogOut(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setLogOut(null);
  };

  const handleCloseNav = () => {
    setOpenNav(false);
  };
  const handleToggleNav = () => {
    setOpenNav(!openNav);
    setAnchorEl(null);
    
  };

  let navbarElement = courses.map((courses, index) => <NavbarItem coursesText={courses.text}/>)

return (
  <Box sx={{ flexGrow: 2 }}>
  <AppBar position='static' color='inherit' elevation={1}>
    <Toolbar>
    <IconButton color='inherit' onClick={handleToggleNav} size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}>
      <MenuIcon/>
    </IconButton>

      <Drawer
  anchor='left'
  open={openNav}
  onClose={handleCloseNav}
>
<List sx={{width: '300px'}}>
  <ListItem disablePadding>
    <ListItemButton component={NavLink} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Курси" />
    </ListItemButton>
  </ListItem>
    <Divider />
    {navbarElement}
  </List>
</Drawer>

    <Typography variant='h6' component="div" sx={{ flexGrow: 1 }} >
        KEMKbridge
    </Typography>
    <IconButton color='inherit' size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}>
      <AddIcon/>
    </IconButton>
    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleToggle}>Приєднатися</MenuItem>
                <MenuItem onClick={handleToggle}>Створити курс</MenuItem>
      </Menu>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Box
        sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 200,
        },
      }}
    >
      <Paper>
      <Box p={3}>
      <Typography variant='h6' component="div" sx={{ flexGrow: 1, mb: '0.5rem' }} >
        Створити курс
      </Typography>
      <TextField  onChange={(e) => setText(e.target.value)} value={text} label="Назва курсу" variant="filled" sx={{width: '100%'}}  />
      </Box>
      <Stack direction="row" spacing={2}>
      <Button onClick={handleClose} sx={{ flexGrow: 1 }}>Відміна</Button>
      <Button  sx={{ flexGrow: 1 }} onClick={createCourse} component={NavLink} to="/myTasksList" >Створити</Button>
      </Stack>
      </Paper>
      </Box>
      </Backdrop>


    <IconButton color='inherit' onClick={handleProfile}>
    <Avatar/>
    </IconButton>
    <Menu
                id="menu-appbar"
                anchorEl={logOut}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(logOut)}
                onClose={handleCloseProfile}
              >
                <MenuItem component={NavLink} to="/login" onClick={logout}>Вийти</MenuItem>
      </Menu>

      
    </Toolbar>
  </AppBar>
  </Box>
)
}

export default Header;
import React from 'react';
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import { NavLink } from 'react-router-dom';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';


const NavbarItem = (props) => {
    return (
        <ListItem disablePadding>
        <ListItemButton component={NavLink} to="/tasksList" >
          <ListItemIcon>
            <TaskOutlinedIcon />
          </ListItemIcon>
          <ListItemText>{props.coursesText}</ListItemText>
        </ListItemButton>
      </ListItem>
    )
    }
    
    export default NavbarItem;
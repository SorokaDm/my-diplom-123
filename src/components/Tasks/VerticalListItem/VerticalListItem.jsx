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
import Header from './../../Header'





const VerticalListItem = (props) => {
    return (
      <Box>
			
        <Grid item xs={12}> 
        <Box>
        <Container sx={{mt: '1.5rem', mb: '1.5rem' }} height='3rem'>     
            <Card sx={{height: '100%', width: '100%'}} variant="outlined" >

            <List>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/taskItem">
              <ListItemIcon>
                <Avatar sx={{ bgcolor: 'black',}} >
                    <AssignmentIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={"Викладач додав завдання: Курсовий проект"} />
            </ListItemButton>
          </ListItem>
          </List>      
            </Card>
            </Container>
            </Box>
        </Grid>
        </Box>
    );
};

export default VerticalListItem;
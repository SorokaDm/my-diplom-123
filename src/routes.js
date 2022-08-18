import React from 'react'
import { Navigate , Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { NavLink } from 'react-router-dom';
import Registration from './pages/Register';
import MyTasks from './components/MyTasks/MyTasks'
import CreateTask from './components/MyTasks/CreateTask/CreateTask'
import Tasks from './components/Tasks/Tasks'
import TaskItem from './components/Tasks/TaskItem/TaskItem'
import { Routing } from './pages/routing';
import { RoutPage } from './pages/routPage';
import MyTaskItem from './components/MyTasks/MyTaskItem/MyTaskItem'



export const useRoutes = (isLogin) => {

    
    if (isLogin) {
        return(
            <Routes>
				<Route path="/" element={<Dashboard/>}/>
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path='/myTasksList/:id' element={<MyTasks />}/>
                <Route path='/myTasksList' element={<MyTasks />}/>
                <Route path='/createTask' element={<CreateTask />}/>
                <Route path='/tasksList' element={<Tasks />}/>
                <Route path='/taskItem' element={<TaskItem />}/>
                <Route path='/myTaskItem' element={<MyTaskItem />}/>

			</Routes>
        )
    }

    return (
        <Routes>
				<Route path="/login" element={<Login/>} />
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/register" element={<Registration/>} />
			</Routes>
    )
}


/*
<Navigate to="/login"/>
<Navigate to="/"/>
*/
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { useRoutes } from './routes'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook'

const App = () => {

const {login, logout, token, userId, isReady} = useAuth()
const isLogin = !!token
const routes = useRoutes(isLogin)


	return (
		<AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin}}>
		<div>
			<BrowserRouter>
			{routes}
			</BrowserRouter>
		</div>
		</AuthContext.Provider>
	)
}

export default App

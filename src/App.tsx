import React from 'react'
import './App.css'
import { useAuth } from 'context/auth'
import { Authentication } from 'views/authentication'
import { Logout } from 'views/authentication/logout'

function App() {
  const { user } = useAuth()
  console.log(user)
  return <div className="App">{user ? <Logout /> : <Authentication />}</div>
}

export default App

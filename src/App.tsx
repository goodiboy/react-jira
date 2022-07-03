import React from 'react'
import './App.css'
import { useAuth } from 'context/auth'
import { UnAuthentication } from 'views/unauthentication'
import { Authentication } from './views/authentication'

function App() {
  const { user } = useAuth()
  console.log(user)
  return <div className="App">{user ? <Authentication /> : <UnAuthentication />}</div>
}

export default App

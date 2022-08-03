import React from 'react'
import './App.css'
import { useAuth } from 'context/auth'
import { UnAuthentication } from 'views/unauthentication'
import { Authentication } from './views/authentication'
import { ErrorBoundary } from './components/error-boundary'
import { FullPageErrorFallBack } from './components/lib'

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      <ErrorBoundary fallBackRender={FullPageErrorFallBack}>
        {user ? <Authentication /> : <UnAuthentication />}
      </ErrorBoundary>
    </div>
  )
}

export default App

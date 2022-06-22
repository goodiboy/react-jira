import React from 'react'
import { useAuth } from 'context/auth'

export const Logout = () => {
  const { logout } = useAuth()
  return (
    <div>
      <button onClick={logout}>登出</button>
    </div>
  )
}

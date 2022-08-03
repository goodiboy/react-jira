import React, { ReactNode } from 'react'
import * as auth from '../api/auth'
import { AuthForm, User } from '../types/auth'
import { useAsync } from '../utils/use-async'
import { useMount } from '../utils/hook'
import { http } from '../utils/http'
import { FullPageErrorFallBack, FullPageLoading } from '../components/lib'

const AuthContext = React.createContext<
  | {
      user: User | null
      register: (form: AuthForm) => Promise<void>
      login: (form: AuthForm) => Promise<void>
      logout: () => Promise<void>
    }
  | undefined
>(undefined)

AuthContext.displayName = 'AuthContext'

const boostrapUser = async () => {
  let user: User | null = null
  const token = auth.getToken()
  if (token) {
    const data = await http('me', { token })
    user = data.user
  }
  return user
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    run,
    setData: setUser
  } = useAsync<User | null>()
  const login = (form: AuthForm) => auth.login(form).then(setUser)
  const register = (form: AuthForm) => auth.register(form).then(setUser)
  const logout = () => auth.logout().then(() => setUser(null))

  useMount(() => {
    run(boostrapUser())
  })

  if (isIdle || isLoading) {
    return <FullPageLoading />
  }

  if (isError) {
    return <FullPageErrorFallBack error={error} />
  }

  return <AuthContext.Provider value={{ user, login, register, logout }} children={children} />
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用')
  }
  return context
}

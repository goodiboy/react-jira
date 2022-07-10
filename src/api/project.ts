import { Project } from '../types/project-list'
import { useHttp } from '../utils/http'
import { useAsync } from '../utils/use-async'
import { useEffect } from 'react'
import { cleanObject } from '../utils'
import { User } from '../types/auth'

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp()
  const { run, ...result } = useAsync<Project[]>()
  useEffect(() => {
    run(client('projects', { data: cleanObject(param || {}) }))
  }, [param])
  return result
}

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp()
  const { run, ...result } = useAsync<User[]>()
  useEffect(() => {
    run(client('users', { data: cleanObject(param || {}) }))
  }, [param])

  return result
}

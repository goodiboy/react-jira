import { User } from './auth'

export interface Project {
  id: string
  name: string
  personId: string
  pin: boolean
  organization: string
  created: number
}

export interface ListProps {
  list: Project[]
  users: User[]
}

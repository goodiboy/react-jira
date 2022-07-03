import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useDebounce, useMount } from '../../utils/hook'
import { useHttp } from '../../utils/http'
import { cleanObject } from '../../utils'
import { Panel } from './Panel'
import { List } from './List'

export const ProjectList = () => {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const debounceParam = useDebounce(param, 200)
  const [list, setList] = useState([])
  const client = useHttp()

  useEffect(() => {
    client('projects', { data: cleanObject(debounceParam) }).then(setList)
  }, [debounceParam])

  useMount(() => {
    client('users').then(setUsers)
  })

  return (
    <Container>
      <h1>项目列表</h1>
      <Panel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`

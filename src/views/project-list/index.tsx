import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useDebounce } from '../../utils/hook'
import { Panel } from './Panel'
import { List } from './List'
import { useProjects, useUsers } from '../../api/project'
import { Typography } from 'antd'
export const ProjectList = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const debounceParam = useDebounce(param, 200)
  const { data: list, error, isLoading } = useProjects(debounceParam)
  const { data: users } = useUsers()

  return (
    <Container>
      <h1>项目列表</h1>
      <Panel users={users || []} param={param} setParam={setParam} />
      {error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`

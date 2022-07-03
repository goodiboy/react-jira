import React from 'react'
import { useAuth } from 'context/auth'
import styled from '@emotion/styled'
import { Row } from '../../components/lib'
import { ReactComponent as SoftwareLogo } from 'assets/img/software-logo.svg'
import { Button, Dropdown, Menu } from 'antd'
import { ProjectList } from '../project-list'

export const Authentication = () => {
  const { logout, user } = useAuth()
  const menuItems = [
    {
      key: 'logout',
      label: (
        <Button type="link" onClick={logout}>
          登出
        </Button>
      )
    }
  ]

  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={'18rem'} color={'rgb(38, 132, 255)'} />
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown overlay={<Menu items={menuItems} />}>
            <Button type="link">Hi, {user?.name}</Button>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectList />
      </Main>
    </Container>
  )
}
const Container = styled.div({
  display: 'grid',
  gridTemplateRows: '6rem 1fr',
  height: '100vh'
})

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`
const HeaderLeft = styled(Row)()
const HeaderRight = styled.div()
const Main = styled.main()

import React, { useState } from 'react'
import { Register } from './Register'
import { Login } from './Login'
import { Button, Card, Divider, Typography } from 'antd'
import styled from '@emotion/styled'
import logo from 'assets/img/logo.svg'
import left from 'assets/img/left.svg'
import right from 'assets/img/right.svg'
import { useDocumentTitle } from 'utils/hook'

export const UnAuthentication = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState<null | Error>(null)
  useDocumentTitle('请登录注册以继续')
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{isRegister ? '请注册' : '请登录'}</Title>
        {error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
        {isRegister ? <Register onError={setError} /> : <Login onError={setError} />}
        <Divider />
        <LongButton onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? '已经有账号了？直接登录' : '没有账号？注册新账号'}
        </LongButton>
      </ShadowCard>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`

export const LongButton = styled(Button)`
  width: 100%;
`

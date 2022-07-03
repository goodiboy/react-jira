/** @jsxImportSource @emotion/react */

import React from 'react'
import { User } from '../../types/auth'
import { Form, Input, Select } from 'antd'

interface PanelProps {
  users: User[]
  param: {
    name: string
    personId: string
  }
  setParam: (param: PanelProps['param']) => void
}

export const Panel = ({ users, param, setParam }: PanelProps) => {
  return (
    <Form css={{ marginBottom: '2rem' }} layout="inline">
      <Form.Item>
        <Input
          placeholder="项目名"
          type="text"
          onChange={(e) => {
            setParam({
              ...param,
              name: e.target.value
            })
          }}
          value={param.name}
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value
            })
          }
        >
          <Select.Option value={''}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  )
}

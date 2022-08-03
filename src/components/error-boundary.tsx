import React from 'react'

type FallbackRender = (props: { error: Error | null }) => React.ReactElement

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallBackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null }

  // 当子组件抛出异常的时候，这里会接受并且调用
  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    const { error } = this.state
    const { fallBackRender, children } = this.props
    if (error) {
      return fallBackRender({ error })
    }
    return children
  }
}

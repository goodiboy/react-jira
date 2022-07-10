import { useState } from 'react'

interface State<T> {
  data: T | null
  error: Error | null
  state: 'idle' | 'loading' | 'error' | 'success'
}

const defaultState: State<null> = {
  state: 'idle',
  data: null,
  error: null
}

export const useAsync = <T>(initialState?: State<T>) => {
  const [state, setState] = useState({
    ...defaultState,
    ...initialState
  })

  const setData = (data: T) => {
    setState({
      data,
      error: null,
      state: 'success'
    })
  }

  const setError = (error: Error) => {
    setState({
      error,
      data: null,
      state: 'error'
    })
  }

  const run = (promise: Promise<T>) => {
    if (!(promise instanceof Promise)) {
      throw new Error('请传入promise类型函数')
    }
    setState({ ...state, state: 'loading' })

    promise
      .then((data) => {
        setData(data)
        return data
      })
      .catch((error) => {
        setError(error)
        return error
      })
  }

  return {
    isIdle: state.state === 'idle',
    isLoading: state.state === 'loading',
    isError: state.state === 'error',
    isSuccess: state.state === 'success',
    run,
    setData,
    setError,
    ...state
  }
}

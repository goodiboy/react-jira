import { useEffect, useState } from 'react'

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}

// 防抖
export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounce, setDebounce] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => setDebounce(value), delay)
    // 返回
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounce
}

// 数组的一些操作方法
export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray)
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value]
      copy.slice(index, 1)
      setValue(copy)
    }
  }
}

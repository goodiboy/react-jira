// 判断一个是不是假的
export const isFalsy = (value: unknown) => (value === 0 ? false : !value)

// 删除对象无效的属性
export const cleanObject = (obj: Record<string, unknown>) => {
  const result = { ...obj }
  Object.keys(result).forEach((key) => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

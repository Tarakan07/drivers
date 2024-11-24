import React from 'react'

export const useInput = <T>(initialValue: T) => {
  const [value, setValue] = React.useState<T>(initialValue)

  const onChangeText = React.useCallback((newValue: T) => {
    setValue(newValue)
  }, [])

  const reset = React.useCallback(() => {
    setValue(initialValue)
  }, [initialValue])

  const bind = { value, onChangeText }

  return { value, reset, bind }
}

import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter())

  act(() => {
    result.current.increment()
    result.current.increment()
  })

  expect(result.current.count).toBe(2)
})
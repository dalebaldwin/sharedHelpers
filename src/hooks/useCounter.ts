import { useState } from 'react'

const useCounter = (initialValue: any) => {

  const [count, setCount] = useState(initialValue)
  return [count, setCount]
}

export default useCounter
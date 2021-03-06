import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement } from '@/actions/counter'

const ReduxDemo = () => {
  const dispatch = useDispatch()
  const reduxNumber = useSelector((state) => state.counter.number)

  const handleIncrement = () => {
    dispatch(increment(1))
  }

  const handleDecrement = () => {
    dispatch(decrement(1))
  }

  return (
    <div className='redux-demo'>
      <p>
        current redux counter:
        {reduxNumber}
      </p>
      <button onClick={handleIncrement}>
        increment
      </button>

      <button onClick={handleDecrement}>
        decrement
      </button>
    </div>
  )
}

export default ReduxDemo
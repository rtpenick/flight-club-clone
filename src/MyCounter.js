import React from 'react'
import { useState } from 'react'

const MyCounter = ({initialCount,testValue}) => {

    const [count,setCount] = useState(initialCount)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount((prev) => prev - 1)

    }

    const restart = () => {
        setCount(0)
    }

    const switchSigns = () => {
        setCount((count) => count * -1)
    }

  return (
    <div>
        <p data-testid="countP">The count is: {count}</p>
        <div className="buttons">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={restart}>Restart</button>
            <button onClick={switchSigns}>Switch form + to - or vice versa</button>
        </div>
        <p>Test value: {testValue}, initial: {initialCount}</p>
    </div>
  )
}

export default MyCounter
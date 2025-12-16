import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    function increment(){
        setCount(count+1);
    }
  return (
    <>
        <h3>Count: {count}</h3>
        <button onClick={increment}>Increment</button>
    </>
)
}

export default Counter
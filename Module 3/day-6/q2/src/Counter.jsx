import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    function handleCount(){
        setCount(prev => prev+1)
    }
    useEffect(()=>{
        if(count%3 === 0)
            alert(`The current number ${count} is divisible by 3`)
    },[count])
  return (
    <>
        <h2>The count is : {count}</h2>
        <button onClick={handleCount}>Increase Count</button>
    </>
  )
}

export default Counter
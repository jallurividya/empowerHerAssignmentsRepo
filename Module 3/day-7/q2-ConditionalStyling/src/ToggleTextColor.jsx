import React from 'react'
import { useState } from 'react'

const ToggleTextColor = () => {
    const [isRed, setIsRed] = useState(true)
    function toggleColor(){
        setIsRed(!isRed)
    }
  return (
    <>
        <div style={{color : isRed?'red':'green', fontWeight:'bold'}}>This text colour changes while clicking the button</div>
        <button onClick={toggleColor}>Toggle</button>
    </>
  )
}

export default ToggleTextColor
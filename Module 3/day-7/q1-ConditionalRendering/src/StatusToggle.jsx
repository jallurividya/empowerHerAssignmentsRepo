import React, { useState } from 'react'
import ComponentB from './ComponentB'
import ComponentA from './ComponentA'

const StatusToggle = () => {
    const [status, setStatus] = useState(false)
    function toggle(){
        setStatus(!status)
    }
  return (
    <>
        <button onClick={toggle}>Change Status</button>
        {status ? <ComponentB /> : <ComponentA />}
    </>
  )
}

export default StatusToggle
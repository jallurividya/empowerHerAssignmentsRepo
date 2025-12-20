import React from 'react'
import Component3 from './Component3'

const Component2 = (props) => {
  return (
    <div>
        <h2>Component2</h2>
        <Component3 {...props}/>
    </div>
  )
}

export default Component2
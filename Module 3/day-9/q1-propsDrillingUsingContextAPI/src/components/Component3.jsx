import React, { useContext } from 'react'
import Component4 from './Component4'
import { AppContext } from './Component1'
const Component3 = () => {
  const { a,b } = useContext(AppContext)
  return (
    <div>
        <h2>Component3</h2>
        <h4>This is a: {a}</h4>
        <h4>This is b: {b}</h4>
        <Component4 />
    </div>
)
}

export default Component3
import React, { useContext } from 'react'
import Component5 from './Component5'
import { AppContext } from './Component1'

const Component4 = () => {
  const { c,d } = useContext(AppContext)
  return (
    <div>
        <h2>Component4</h2>
        <h4>This is c: {c}</h4>
        <h4>This is d: {d}</h4>
        <Component5 />
    </div>
  )
}

export default Component4
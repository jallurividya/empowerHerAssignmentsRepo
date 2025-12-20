import React from 'react'
import Component5 from './Component5'

const Component4 = ({c,d,e,f}) => {
  return (
    <div>
        <h2>Component4</h2>
        <h4>This is c: {c}</h4>
        <h4>This is d: {d}</h4>
        <Component5 e={e} f={f}/>
    </div>
  )
}

export default Component4
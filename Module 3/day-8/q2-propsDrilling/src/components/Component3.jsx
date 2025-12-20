import React from 'react'
import Component4 from './Component4'

const Component3 = ({a,b,c,d,e,f}) => {
  return (
    <div>
        <h2>Component3</h2>
        <h4>This is a: {a}</h4>
        <h4>This is b: {b}</h4>
        <Component4 c={c} d={d} e={e} f={f}/>
    </div>
)
}

export default Component3
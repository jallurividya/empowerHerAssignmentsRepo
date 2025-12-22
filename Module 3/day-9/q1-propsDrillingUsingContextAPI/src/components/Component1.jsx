import React, { createContext } from 'react'
import Component2 from './Component2'
export const AppContext = createContext()

const Component1 = () => {
  const colors ={
    a:"red",
    b:"blue",
    c:"green",
    d:"yellow",
    e:"orange",
    f:"pink"
  }
  return (
    <div>
        <h2>Component1</h2>
        {/* <Component2 a="red" b="green" c="blue" d="black" e="orange" f="pink"/> */}
        <AppContext.Provider value={ colors }>
          <Component2 />
        </AppContext.Provider>

    </div>
  )
}

export default Component1
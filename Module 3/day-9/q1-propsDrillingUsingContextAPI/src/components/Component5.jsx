import React, { useContext } from 'react'
import Component6 from './Component6'
import { AppContext } from './Component1'

const Component5 = () => {
    const { f } = useContext(AppContext)
    return (
        <div>
            <h2>Component5</h2>
            <h4>This is f: {f}</h4>
            <Component6 />
        </div>
    )
}

export default Component5
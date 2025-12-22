import React, { useContext } from 'react'
import { AppContext } from './Component1'

const Component6 = () => {
    const { e } = useContext(AppContext)
    return (
        <div>
            <h2>Component6</h2>
            <h4>This is e: {e}</h4>
        </div>
    )
}

export default Component6
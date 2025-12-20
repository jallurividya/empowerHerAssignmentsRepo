import React from 'react'
import Component6 from './Component6'

const Component5 = ({e,f}) => {
    return (
        <div>
            <h2>Component5</h2>
            <h4>This is f: {f}</h4>
            <Component6 e={e} />
        </div>
    )
}

export default Component5
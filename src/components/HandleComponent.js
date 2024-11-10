import React from 'react'
import { Handle } from 'reactflow'

export const HandleComponent = ({ id, position,type,style}) => {
    return (
        <Handle
            type={type}
            position={position}
            id={`${id}-output`}
            style={style}
        >
            {/* <span className={`text-sm  ${position==="left"?"-ml-32":""}`}>{`${id}-value`}</span> */}
        </Handle>
    )
}


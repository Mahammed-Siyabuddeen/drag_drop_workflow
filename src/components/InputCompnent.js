import React from 'react'

export function InputCompnent({label,inputType,name, currName,handleInput}) {
    
    
    return (
        <div className="flex flex-col my-2">
            <label className='font-medium'>{label}</label>
            <input
            className='border px-2 py-3 rounded-md'
            value={currName}
            name={name}
            onChange={handleInput}
             type={inputType} placeholder='enter your input'/>
        </div>
    )
}

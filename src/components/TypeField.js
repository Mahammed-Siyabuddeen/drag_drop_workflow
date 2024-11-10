import React, { useState } from 'react'

export default function TypeField({ type }) {
    const [inputType, setInputType] = useState(type);

    const handleTypeChange = (e) => {
        setInputType(e.target.value);

    };

    return (
        <div className='flex flex-col my-2'>
            <label className="font-medium">Model Name:</label>
                <select className=" border px-2 py-3 rounded-r-md  bg-inherit focus:outline-none " value={inputType} onChange={handleTypeChange}>
                    <option value="Text">{type}</option>
                </select>
        </div>
    )
}


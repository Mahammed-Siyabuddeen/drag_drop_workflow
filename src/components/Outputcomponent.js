import React from 'react'
import { useSelector } from "react-redux";

const Outputcomponent = () => {
    const {output}=useSelector(state=>state.fieldValue)
    return (
        <>
            <label className="font-medium">Output Response</label>
            <textarea value={output}  rows={5} className='border-2 focus:outline-none rounded-md w-full '>
            </textarea>
        </>
    )
}

export default Outputcomponent
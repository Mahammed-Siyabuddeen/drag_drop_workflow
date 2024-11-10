import React, { useState } from 'react'
import { OpneAiIcon } from '../icons/OpenAiIcon'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setOutput } from '../redux/fleidValuesSlice';
import { verifyFlow } from '../features/verifyFlow';
import { removeError, setError } from '../redux/errorSlice';
import NotificationComponent from './NotificationComponent';

function Header() {
    const { input, llm, } = useSelector(state => state.fieldValue);
    const flow = useSelector(state => state.flow);
    const [displayNotification, setDisplayNotification] = useState(false)
    const dispatch = useDispatch()
    const handleDeploy = () => {

    }
    const handleRun = async () => {
        try {
            let error = verifyFlow(input,llm,flow)
            if (error) {
                throw error
            }
            const { prompt, apiBase, apiKey, maxToken, temperature } = llm
            const { data } = await axios.post(apiBase, {
                model: 'gpt-3.5-turbo',
                messages: {
                    role: "user",
                    content: prompt,
                }
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                }
            })
            
            dispatch(setOutput(data.choices[0].message.content|"data"))
            setDisplayNotification(true)
            setTimeout(() => {
                setDisplayNotification(false)
            }, 3000);
        } catch (error) {
            console.log(error);
            dispatch(setError({ type: error.type, message: error.message }))
            setDisplayNotification(true)
            setTimeout(() => {
                dispatch(removeError())
                setDisplayNotification(false)
            }, 3000);
        }

    }
    return (
        <div className="flex items-center shadow justify-between px-6 py-3">
            {
                displayNotification ?
                    <NotificationComponent />
                    : <></>
            }
            <div className="flex gap-1 text-xl  font-bold items-center text-green-500">
                <OpneAiIcon />
                OpenAGI
            </div>
            <div className="flex gap-2 items-center">
                <button onClick={handleDeploy} className='bg-gray-400 text-white px-3 py-2 rounded-md'>Deploy</button>
                <button onClick={handleRun} className='bg-green-800 text-white px-3 py-2 rounded-md'>Run</button>
            </div>
        </div>
    )
}

export default Header
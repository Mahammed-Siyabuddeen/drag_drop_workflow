// toolbar.js

import { DraggableNode } from './draggableNode';
import { InputIcon } from './icons/InputIcon';
import { OpneAiIcon } from './icons/OpenAiIcon';

export const PipelineToolbar = () => {

    return (
        <div className=' m-1 p-4 shadow-md h-screen'>
            <div className='flex flex-col gap-4 '>
                <DraggableNode type='customInput' label='Input'  content={<InputIcon/>}/>
                <DraggableNode type='llm' label='LLM' content={<OpneAiIcon/>} />
                <DraggableNode type='customOutput' label='Output'  content={<InputIcon/>}/>
               
            </div>
        </div>
    );
};

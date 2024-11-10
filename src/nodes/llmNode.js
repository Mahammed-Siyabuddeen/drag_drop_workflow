// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { HandleComponent } from '../components/HandleComponent';
import { InputCompnent } from '../components/InputCompnent';
import TypeField from '../components/TypeField';
import { OpneAiIcon } from '../icons/OpenAiIcon';
import { useDispatch, useSelector } from "react-redux";
import { setLlm } from '../redux/fleidValuesSlice';


export const LLMNode = (id) => {
  const { llm } = useSelector(state => state.fieldValue)
  const { errorType, errorMessage, isError } = useSelector(state => state.error)

  const dispatch = useDispatch()

  const handleInput = (e) => {
    const newInput = { ...llm, [e.target.name]: e.target.value }
    dispatch(setLlm(newInput))
  }

  return (
    <BaseNode data={"LLM"}>
      <HandleComponent
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
      />
      <HandleComponent
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
      <div className="flex justify-between relative items-center">
        <div className="flex items-center gap-2 text-lg font-bold">
          <span>LLM</span>
          <OpneAiIcon />

        </div>
        <span className='w-4 h-4 bg-gray-500 rounded-full'></span>
        {
          isError && errorType==='llm' ?
            <p className='bg-red-500 absolute text-white py-2 px-1 -top-10 -right-10 rounded-md'>{errorMessage}</p>
            : <></>
        }

      </div>
      <p className="bg-blue-100 py-4 px-2 my-1 text-sm">Lorem ipsum sic dolar amet</p>

      <TypeField type={"gpt-3.5-tureb"} />
      <InputCompnent handleInput={handleInput} name="prompt" currName={llm.prompt} inputType={"text"} label={"Prompt"} />
      <InputCompnent handleInput={handleInput} name="apiBase" currName={llm.apiBase} inputType={"text"} label={"Open AI API Base"} />
      <InputCompnent handleInput={handleInput} name="apiKey" currName={llm.apiKey} inputType={"password"} label={"Open AI Key"} />
      <InputCompnent handleInput={handleInput} name="maxToken" currName={llm.maxToken} inputType={"number"} label={"Max Token"} />
      <InputCompnent handleInput={handleInput} name="temperature" currName={llm.temperature} inputType={"number"} label={"Temperature"} />

    </BaseNode>

  );
}

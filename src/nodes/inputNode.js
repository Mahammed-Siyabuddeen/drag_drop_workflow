// inputNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { InputCompnent } from "../components/InputCompnent";
import { HandleComponent } from "../components/HandleComponent";
import { InputIcon } from "../icons/InputIcon";
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../redux/fleidValuesSlice";

export const InputNode = ({ id, type, position, data }) => {
  const dispatch = useDispatch()
  const { input } = useSelector(state => state.fieldValue)
  const { errorType, errorMessage, isError } = useSelector(state => state.error)
  const handleInput = (e) => {
    dispatch(setInput(e.target.value))
  }


  return (
    <BaseNode data={"Input"}>
      <div className="flex relative justify-between items-center">
        <div className="flex items-center gap-2 text-lg font-bold">
          <span>INPUT</span>
          <InputIcon />
        </div>
        <span className='w-4 h-4 bg-gray-500 rounded-full'></span>
        {
          isError && errorType === 'input' ?
            <p className='bg-red-500 absolute text-white py-2 px-1 -top-10 -right-10 rounded-md'>{errorMessage}</p>
            : <></>
        }
      </div>
      <p className="bg-blue-100 py-4 px-2 my-1 text-sm">Write the Input/Question you want to ask</p>
      <InputCompnent label={"Name"} currName={input} handleInput={handleInput} />
      <div className="">
        <HandleComponent type={"source"} id={id} position={Position.Right} />
        {/* <CustomHundlesComponent currName={currName} /> */}
      </div>
    </BaseNode>

  );
};

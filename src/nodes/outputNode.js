// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import {HandleComponent} from '../components/HandleComponent';
import {InputCompnent} from '../components/InputCompnent';
import TypeField from '../components/TypeField';
import Outputcomponent from '../components/Outputcomponent';
import { InputIcon } from '../icons/InputIcon';

export const OutputNode = ({ id, data }) => {
  
  return (
    <BaseNode data={"Output"}>
       <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-lg font-bold">
          <span>OUTPUT</span>
          <InputIcon />
        </div>
        <div className='w-4 h-4 bg-gray-500 rounded-full'></div>
      </div>
      <p className="bg-blue-100 py-4 px-2 my-1 text-sm">Lorem ipsum sic dolar amet</p>

      <HandleComponent type={"target"} id={id} position={Position.Left}/>
      <Outputcomponent/>
    </BaseNode>
  );
}

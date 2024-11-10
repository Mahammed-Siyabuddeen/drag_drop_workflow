
import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap, Handle } from "reactflow";
import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { addNode,getNodeID,onNodesChange,onEdgesChange,onConnect,updateNodeField } from './redux/flowSlice'

import "reactflow/dist/style.css";
import { useDispatch, useSelector } from "react-redux";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
};


export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const nodes=useSelector(state=>state.flow.nodes)
  const edges=useSelector(state=>state.flow.edges)
  const dispatch = useDispatch();

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );

        const type = appData?.nodeType;

        // check if the dropped element is valid
        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const {payload} =dispatch(getNodeID({type}));
        console.log("nodeid", position);
        
        const newNode = {
          id: payload,
          type,
          position,
          data: getInitNodeData(payload, type),
        };
        
        dispatch(addNode(newNode));
      }
    },
    [dispatch,reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const getNodeById = (id) => nodes.find((node) => node.id === id);

  const customOnConnect = (params) => {
    const sourceNode = getNodeById(params.source);
    const targetNode = getNodeById(params.target);
    if (
      (sourceNode?.type === 'customInput' && targetNode?.type === 'llm') || (sourceNode?.type === 'llm' && targetNode?.type === 'customOutput')
    ) 
      dispatch(onConnect(params));
    
  }
  return (
    <>
      <div ref={reactFlowWrapper} className="w-full h-dvh">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={(changes)=>dispatch(onNodesChange(changes))}
          onEdgesChange={(changes)=>console.log(changes)}
          onConnect={customOnConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragStart={(e) => console.log("dat")}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
        >
          <Background color="#aaa" gap={gridSize} />
          <Controls />
          <MiniMap />
          <Handle
            key={1}
            type="target"
            position="left"
            id={1}
            style={{ top: 20 + 1 * 20 }} 
          />
        </ReactFlow>
      </div>
    </>
  );
};

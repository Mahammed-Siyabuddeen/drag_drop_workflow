import { createSlice } from "@reduxjs/toolkit"
import {
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    MarkerType,
} from 'reactflow';


const initialState = {
    nodes: [],
    edges: [],
    nodeIDs: {}
}

const flowSlice = createSlice({
    initialState,
    name: 'flow',
    reducers: {
        addNode: (state, action) => {
            state.nodes.push(action.payload)
        },
        getNodeID: (state, action) => {
            const { type } = action.payload
            if (state.nodeIDs[type] === undefined) {
                state.nodeIDs[type] = 0
            }
            state.nodeIDs[type] += 1
            action.payload= `${type}-${state.nodeIDs[type]}`
        },
        onNodesChange: (state, action) => {
            state.nodes = applyNodeChanges(action.payload, state.nodes);
        },
        onEdgesChange: (state, action) => {
            state.edges = applyEdgeChanges(action.payload, state.edges);
        },
        onConnect: (state, action) => {
            const connection = action.payload;
            state.edges = addEdge(
                {
                    ...connection,
                    type: 'smoothstep',
                    animated: true,
                    markerEnd: { type: MarkerType.Arrow, height: '20px', width: '20px' },
                },
                state.edges
            );
        },
        updateNodeField: (state, action) => {
            const { nodeId, fieldName, fieldValue } = action.payload;
            state.nodes = state.nodes.map((node) => {
                if (node.id === nodeId) {
                    node.data = { ...node.data, [fieldName]: fieldValue };
                }
                return node;
            });
        },

    }
})


export const { addNode,getNodeID,onNodesChange,onEdgesChange,onConnect,updateNodeField} = flowSlice.actions
export default flowSlice.reducer
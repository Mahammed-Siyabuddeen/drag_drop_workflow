import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: "",
    llm: { prompt: "", apiBase: "", apiKey: "", maxToken: "", temperature: 0.5 },
    output: ""
}

const fieldValue = createSlice({
    initialState,
    name: "fieldValue",
    reducers: {
        setInput: (state, action) => {
            state.input = action.payload
        },
        setLlm:(state,action)=>{
            state.llm=action.payload;
        },
        setOutput:(state,action)=>{
            state.output=action.payload
        }

    }
})

export const {setInput,setLlm,setOutput } = fieldValue.actions
export default fieldValue.reducer
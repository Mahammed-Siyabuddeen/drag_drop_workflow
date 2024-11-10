import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errorType:"",
    isError:false,
    errorMessage:""
}

const errorSlice = createSlice({
    initialState,
    name: "errorSlice",
    reducers: {
        setError:(state,action)=>{
            const {type,message}=action.payload
            console.log(action.payload);
            
            return state={isError:true,errorType:type,errorMessage:message}
        },
        removeError:(state,action)=>{
            return state=initialState
        }

    }
})

export const {setError,removeError } = errorSlice.actions
export default errorSlice.reducer
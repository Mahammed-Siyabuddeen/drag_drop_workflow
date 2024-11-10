import { configureStore  } from "@reduxjs/toolkit";
import flowSlice from './flowSlice'
import fieldValuesSlice from './fleidValuesSlice'
import errorSlice from './errorSlice'
export const store=configureStore({
    reducer:{
        flow:flowSlice,
        fieldValue:fieldValuesSlice,
        error:errorSlice
    }
})
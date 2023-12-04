import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    color : "red"
}

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducer: {
        cngColor:(state,payload)=>{
            state.color = payload.payload.color
        }

    }
})
export const {cngColor} = colorSlice.actions
export const select
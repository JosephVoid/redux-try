import { createSlice } from '@reduxjs/toolkit'

export const typeSlice = createSlice({
    name:'type',

    initialState:{
        value:'R'
    },

    reducers:{
        setToR: (state) => {
            state.value = 'R'
        },
        setToV: (state) => {
            state.value = 'V'
        }
    }
})

export const { setToR, setToV } = typeSlice.actions

export default typeSlice.reducer
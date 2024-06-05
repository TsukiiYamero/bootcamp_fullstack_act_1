import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment(state) {
            return state + 1
        },
        decrement(state) {
            return state - 1
        }
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Diego'
    },
    reducers: {
        setName(state, action) {
            return {
                ...state,
                name: action.payload
            }
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export const { setName } = userSlice.actions
export const counter = counterSlice.reducer
export const user = userSlice.reducer
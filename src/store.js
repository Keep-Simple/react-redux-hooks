import { configureStore, createSlice } from '@reduxjs/toolkit'

export const { actions, reducer } = createSlice({
    name: 'main',
    initialState: {},
    reducers: {},
})

export const store = configureStore({ reducer })

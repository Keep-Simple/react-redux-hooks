import { configureStore, createSlice } from '@reduxjs/toolkit'

import saga from 'redux-saga'
import rootSaga from './sagas'

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        users: {},
        loading: false,
        error: '',
    },
    reducers: {
        loadUsers() {},
        usersLoading(state) {
            state.loading = true
        },
        usersReceived(state, { payload }) {
            payload.forEach((user) => {
                state.users[user.login.uuid] = user
            })
            state.loading = false
        },
        usersLoadingError(state, { payload }) {
            state.error = payload
        },
    },
})

const sagaMiddleware = saga()
const middleware = [sagaMiddleware]

export const store = configureStore({
    reducer: mainSlice.reducer,
    middleware,
})

export const {
    loadUsers,
    usersLoading,
    usersReceived,
    usersLoadingError,
} = mainSlice.actions

sagaMiddleware.run(rootSaga)

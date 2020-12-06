import { configureStore, createSlice } from '@reduxjs/toolkit'

import saga from 'redux-saga'
import rootSaga from './sagas'

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        users: {},
        selectedIds: [],
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
        toggleUserSelect(state, { payload: id }) {
            const user = state.users[id]
            const ids = state.selectedIds
            const index = ids.indexOf(id)

            if (index !== -1) {
                ids.splice(index, 1)
                user.selectTime = null
            } else {
                ids.push(id)
                user.selectTime = new Date().toLocaleDateString()
            }
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
    toggleUserSelect,
} = mainSlice.actions

sagaMiddleware.run(rootSaga)

store.dispatch(loadUsers())

import { put, takeEvery, all, call } from 'redux-saga/effects'
import axios from 'axios'
import {
    usersLoading,
    usersLoadingError,
    usersReceived,
    loadUsers,
} from './store'

function* fetchUsers() {
    try {
        yield put(usersLoading())

        const { data } = yield call(
            axios.get,
            'https://randomuser.me/api/?results=20'
        )

        yield put(usersReceived(data?.results))
    } catch (e) {
        yield put(usersLoadingError('Failed Loading Users...'))
    }
}

export default function* rootSaga() {
    yield all([takeEvery(loadUsers.type, fetchUsers)])
}

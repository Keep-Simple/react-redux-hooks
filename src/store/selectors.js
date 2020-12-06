import { createSelector } from '@reduxjs/toolkit'

export const selectUsers = createSelector(
    (state) => state.users,
    (users) => Object.values(users)
)

export const selectUser = (state, id) => state.users[id]

export const selectSelectedUsers = (state) =>
    state.selectedIds.map((id) => state.users[id])

export const selectSelectedCount = (state) => state.selectedIds.length

export const selectLoading = (state) => state.loading

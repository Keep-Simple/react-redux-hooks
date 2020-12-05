import { createSelector } from '@reduxjs/toolkit'

export const selectUsers = createSelector(
    (state) => state.users,
    (users) => Object.values(users) || []
)

export const selectSelectedUsers = createSelector(
    selectUsers,
    (users) => users.filter((user) => user.isSelected) || []
)

export const selectCountSelectedUsers = createSelector(
    selectSelectedUsers,
    (selectedUsers) => selectedUsers.length
)

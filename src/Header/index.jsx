import React from 'react'

import { useSelector } from 'react-redux'

import styles from './styles.module.scss'
import { useTimer } from '../utils/timerHook'
import { selectSelectedCount } from '../store/selectors'

export default function Header() {
    const time = useTimer()
    const selectedUsersCount = useSelector(selectSelectedCount)

    return (
        <header className={styles.header}>
            {time + ' selected users: ' + selectedUsersCount}
        </header>
    )
}

import React from 'react'

import { useSelector } from 'react-redux'

import styles from './styles.module.scss'
import { useTimer } from '../utils/timerHook'
import { selectSelectedCount } from '../store/selectors'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    const time = useTimer()
    const selectedUsersCount = useSelector(selectSelectedCount)
    const showBackButton = location.pathname.length > 1

    return (
        <header className={styles.header}>
            {showBackButton && (
                <Link to="/">
                    <i className="backward icon" /> Return
                </Link>
            )}
            <section>
                {`${selectedUsersCount}  `}
                <i className="users icon" />
            </section>

            <h1 className={styles['header-title']}>
                <i className="facebook messenger icon" />
                Checky
            </h1>

            <section>
                {`${time}  `}
                <i className="clock icon" />
            </section>
        </header>
    )
}

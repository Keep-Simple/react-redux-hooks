import React from 'react'
import styles from '../styles.module.scss'

export default function Tab({ name, current, setTab }) {
    return (
        <div
            className={`${styles.tab} ${name === current ? styles.active : ''}`}
            onClick={() => setTab(name)}
        >
            {name}
        </div>
    )
}

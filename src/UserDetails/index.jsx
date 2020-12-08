import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectUser } from '../store/selectors'
import styles from './styles.module.scss'

export default function UserDetails() {
    const { id } = useParams()

    const {
        gender,
        email,
        phone,
        name: { first, last },
        dob: { date, age },
        location: { city, country },
        picture: { large: avatar },
    } = useSelector((state) => selectUser(state, id))

    return (
        <article className={styles.profile}>
            <img src={avatar} alt="avatar" />
            <section>
                <h3>
                    Name: {first}, {last}
                </h3>

                <h3>
                    Location: {country}, {city}
                </h3>

                <h3>Email: {email}</h3>
                <h3>Phone: {phone}</h3>
                <h3>Birthday: {date.substring(0, 10)}</h3>
                <h3>Age: {age}</h3>
                <h3>Gender: {gender}</h3>
            </section>
        </article>
    )
}

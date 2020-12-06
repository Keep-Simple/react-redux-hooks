import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectUser } from '../store/selectors'

export default function UserDetails() {
    const { id } = useParams()
    const user = useSelector((state) => selectUser(state, id))

    return <div>{`User id = ${user.name.first}`}</div>
}

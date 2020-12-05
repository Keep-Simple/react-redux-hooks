import { useState, useEffect } from 'react'

export function useTimer() {
    const [time, setTime] = useState('')

    useEffect(() => {
        const calcTime = () =>
            setTime(new Date().toLocaleTimeString().slice(0, 8))

        const interval = setInterval(calcTime, 250)
        return () => clearInterval(interval)
    }, [])

    return time
}

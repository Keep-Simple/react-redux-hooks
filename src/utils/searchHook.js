import { useState, useEffect } from 'react'
import { useDebounce } from './debounceHook'

export function useSearchInput(items, filterFn) {
    const [query, setQuery] = useState('')
    const [filteredItems, setFiltered] = useState(items)
    const debouncedQuery = useDebounce(query, 250)

    useEffect(() => {
        setFiltered(filterFn(debouncedQuery, items))
    }, [debouncedQuery, items])

    return {
        filteredItems,
        value: query,
        onChange: (e) => setQuery(e.target.value),
    }
}

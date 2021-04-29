import React, { useState } from 'react'

interface Props {
    onSearch(query: string)
}

export const SearchForm = ({ onSearch }: Props) => {
    const [query, setQuery] = useState('batman')

    return (
        <div>
            SearchForm
            <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="Search" value={query}
                    onChange={event => setQuery(event.target.value)} />

                <button className="btn btn-outline-secondary" onClick={e => onSearch(query)}>Search</button>
            </div>
        </div>
    )
}

/* HTML <-- JSX = <XML/> + {JS}  |  TSX = <XML/> + {TS}  ( + CSS ) */
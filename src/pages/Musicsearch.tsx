import React, { useState } from 'react'
import { AlbumGrid } from '../components/AlbumGrid'
import { SearchForm } from '../components/SearchForm'
import { Album } from '../interfaces/Album'

interface Props { }

const fakeAlbums: Album[] = [
    { id: "123", name: "Album 123", images: [{ url: "https://www.placecage.com/c/300/300" }] },
    { id: "234", name: "Album 234", images: [{ url: "https://www.placecage.com/c/400/400" }] },
    { id: "345", name: "Album 345", images: [{ url: "https://www.placecage.com/c/500/500" }] },
]

export const MusicSearch = (props: Props) => {
    const [albumList, setAlbumList] = useState(fakeAlbums)

    return (
        <div>
            Musicsearch

            <div className="row">
                <div className="col">
                    <SearchForm />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AlbumGrid albums={albumList} />
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Album } from '../interfaces/Album'
import { AlbumCard } from './AlbumCard'

interface Props {
    albums: Album[]
}

export const AlbumGrid = ({ albums /* ,x, y */}: Props) => {
    // const albums = props.albums
    // const { albums, x, y } = props

    return (
        <div>
            AlbumGrid
            <div className="row row-cols-1 row-cols-sm-4 no-gutters">

                {albums.map(result =>
                    <div className="col" key={result.id}>
                        <AlbumCard album={result} />
                    </div>
                )}

            </div>
        </div>
    )
}

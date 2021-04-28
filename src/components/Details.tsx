import React from 'react'
import { Playlist } from './Playlist'

interface Props {
    danePlaylisty: Playlist
    onEdytuj()
}

export const Details = (props: Props) => {
    const playlist=props.danePlaylisty
        return (
        <div>
            Details1
            <dl title={playlist.name} className="placki">

                <dt>Name:</dt>
                <dd>{playlist.name}</dd>
                <dt> Public:</dt>
                <dd style={
                    {
                        color: playlist.public ? "red" : "blue",
                        fontSize: "16px"
                    }
                }>
                    {playlist.public ? "yes" : "no"}</dd>
                <dt>Description:</dt>
                <dd>{playlist.description}</dd>
            </dl>
            <button className="btn btn-info" onClick={e =>props.onEdytuj()}>Edit</button>
        </div>
    )
}

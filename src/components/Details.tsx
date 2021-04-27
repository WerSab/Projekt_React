import React from 'react'

interface Props {

}
const playlist = {
    id: "213", name: "Rock123", public: true, description: "opis"
}


export const Details = (props: Props) => {
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

        </div>
    )
}

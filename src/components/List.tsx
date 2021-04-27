import React from 'react'

interface Props {

}

const playlists = [
    { id: "123", name: "test 123", public: true, description: "test 123" },
    { id: "234", name: "test 234", public: true, description: "test 234" },
    { id: "345", name: "test 345", public: true, description: "test 345" },
]


export const List = (props: Props) => {
    return (
        <div>
            Lista1
            <div className="list-group list-group-flush">
                {playlists.map((playlist, index) =>
                    <div className="list-group-item list-group-item-action"
                        key={playlist.id}>
                        {index+1}.{playlist.name}
                    </div>
                )}
            </div>

        </div>
    )
}

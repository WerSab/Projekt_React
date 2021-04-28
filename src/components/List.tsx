import React, { useState } from 'react'
//const [name, setName] = useState(playlist.name)
//<button className="btn btn-danger" onClick={e => { setTrybEdycji(false) }}>Cancel</button>
interface Props {

}
// color: playlist.public ? "red" : "blue",
const playlists = [
    { id: "123", name: "test 123", public: true, description: "test 123" },
    { id: "234", name: "test 234", public: true, description: "test 234" },
    { id: "345", name: "test 345", public: true, description: "test 345" },
]


export const List = (props: Props) => {
    const [selectedId, setSelectedId] = useState("345")
    return (
        <div>
            Lista1
            <div className="list-group list-group-flush">
                {playlists.map((playlist, index) =>
                    <div className={"list-group-item list-group-item-action" + (playlist.id==selectedId? " active" : " ")} 
                    onClick={e=>setSelectedId(playlist.id)}
                        key={playlist.id}>
                        {index+1}.{playlist.name}
                    </div>
                )}
            </div>

        </div>
    )
}

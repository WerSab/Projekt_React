import React, { useState } from 'react'
import { Playlist } from '../interfaces/Playlist'
//const [name, setName] = useState(playlist.name)
//<button className="btn btn-danger" onClick={e => { setTrybEdycji(false) }}>Cancel</button>
interface Props {
    selectedId: string
    danePlayList: Playlist[]
    setSelectedId(playlist: string)

}
// color: playlist.public ? "red" : "blue",

export const List = (props: Props) => {

    //props.selectedId
    return (
        <div>
            Lista1
            <div className="list-group list-group-flush">{/* https://getbootstrap.com/   doc  components*/}
                {
                    props.danePlayList.map
                        (
                            (playlist, index) =>
                                <div className={"list-group-item list-group-item-action" + (playlist.id == props.selectedId ? " active" : " ")}
                                    onClick={e => props.setSelectedId(playlist.id)}//wrzucamy dane z click do rodzica używając setSelectedId
                                    key={playlist.id}>
                                    {index + 1}.{playlist.name}
                                </div>
                        )}
            </div>

        </div>
    )
}

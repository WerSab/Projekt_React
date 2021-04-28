import React, { useState } from 'react'
import { Details } from '../components/Details'
import { Form } from '../components/Form'
import { List } from '../components/List'
//color: playlist.public ? "red" : "blue",
interface Props {

}


export const Playlists = (props: Props) => {
    const [TrybEdycji, setTrybEdycji] = useState(false)

    return (
        <div>
            <h2>Playlist</h2>
            <div className="row">
                <div className="col">Lista
               <List />
                </div>
                <div className="col">Szczegóły
               {TrybEdycji ? 
                    <div>
                        <Form />
                        <button className="btn btn-danger" onClick={e => { setTrybEdycji(false) }}>Cancel</button>
                        <button className="btn btn-success">Save</button>
                    </div> : <div>
                        <Details />
                        <button className="btn btn-info" onClick={e => { setTrybEdycji(!TrybEdycji) }}>Edit</button>
                    </div>}
-

                </div>


            </div>
        </div>
    )
}

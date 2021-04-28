import React, { useEffect, useState } from 'react'
import { Details } from '../components/Details'
import { Form } from '../components/Form'
import { List } from '../components/List'
import { Playlist } from '../components/Playlist'
//color: playlist.public ? "red" : "blue",
interface Props {

}

const danePlayList:Playlist[] = [
    { id: "123", name: "test 123", public: true, description: "test 123" },
    { id: "234", name: "test 234", public: true, description: "test 234" },
    { id: "345", name: "test 345", public: true, description: "test 345" },
]

export const Playlists = (props: Props) => {
    const [TrybEdycji, setTrybEdycji] = useState(false)
    const [aktywneId, setaktywneId] = useState("345")
    const [aktywnaPlaylista, setaktywnaPlaylista] = useState(danePlayList[0])
    
    useEffect(()=>{
        console.log("efekt")
        //danePlayList.find(p=>p.id==aktywneId)
        
        setaktywnaPlaylista(danePlayList.find(p=>p.id==aktywneId))

    }, [aktywneId])
    
    console.log("renderuje")
    
    return (
        <div>
            <h2>Playlist</h2>
            <div className="row">
                <div className="col">Lista
               <List selectedId={aktywneId} danePlayList={danePlayList} setSelectedId={setaktywneId}/>
                </div>
                <div className="col">Szczegóły
               {TrybEdycji ?
                        <div>
                            <Form />
                            <button className="btn btn-danger" onClick={e => {setTrybEdycji(false) }}>Cancel</button>
                            <button className="btn btn-success">Save</button>
                        </div> : <div>
                            <Details danePlaylisty={aktywnaPlaylista} />
                            <button className="btn btn-info" onClick={e => {setTrybEdycji(!TrybEdycji) }}>Edit</button>
                        </div>}
-

                </div>


            </div>
        </div>
    )
}

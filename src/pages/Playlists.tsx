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
    const [allPlaylists, setallPlaylists] = useState(danePlayList)
    
    useEffect(()=>{
        console.log("efekt")
        //danePlayList.find(p=>p.id==aktywneId)
        
        setaktywnaPlaylista(allPlaylists.find(p=>p.id==aktywneId))

    }, [aktywneId, allPlaylists])
    
    console.log("renderuje")
    const zapiszSzkic=(szkic:Playlist)=>
    {
        setTrybEdycji(false)
        setallPlaylists(allPlaylists.map(playlist=>playlist.id==szkic.id?szkic:playlist))
    }
    return (
        <div>
            <h2>Playlist</h2>
            <div className="row">
                <div className="col">Lista
               <List selectedId={aktywneId} danePlayList={allPlaylists} setSelectedId={setaktywneId}/>
                </div>
                <div className="col">Szczegóły
               {TrybEdycji ?
                        <div>
                            <Form 
                            onAnuluj={()=>setTrybEdycji(false)}
                            onZapisz={(szkic)=>zapiszSzkic(szkic)}
                            playLista={aktywnaPlaylista}
                            />
                            
                        </div> : <div>
                            <Details danePlaylisty={aktywnaPlaylista} 
                            onEdytuj={()=>{setTrybEdycji(true)}}/>
                            
                        </div>}
-

                </div>


            </div>
        </div>
    )
}

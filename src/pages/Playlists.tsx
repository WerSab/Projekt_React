import React from 'react'
import { Details } from '../components/Details'
import { Form } from '../components/Form'
import { List } from '../components/List'

interface Props {
    
}

export const Playlists = (props: Props) => {
    return (
        <div>
           <h2>Playlist</h2> 
           <div className="row">
               <div className="col">Lista
               <List/>
               </div>
               <div className="col">Szczegóły
               <Details/>
               <Form/>
               </div>
               
           </div>
        </div>
    )
}

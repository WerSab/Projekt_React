import React, { useState } from 'react'
import { Playlist } from '../interfaces/Playlist'

interface Props {//ustawiamy nazwy/listę oczekiwanych funkcji/danych i typy w kontrakcie z kontenerem(rodzicem)
    onAnuluj()
    onZapisz(szkic: Playlist)
    playLista:Playlist

}
export const Form = (props: Props) => {
    const [name, setName] = useState(props.playLista.name)
    const [isPublic, setisPublic] = useState(props.playLista.public)
    const [description, setDescription] = useState(props.playLista.description)
    function zmienNazwe(event){
        console.log(event.target.value)
        setName(event.target.value)//zmieniamy lokalny stan(nazwę)
    }
    return (
        <div>
            Formularz
            <pre>{JSON.stringify({name, public:isPublic, description}, null, 4)}</pre>{/*4-odstępy, mtworzymy obiekt ze szkicu i splaszczamy go */}
            <div className="form-group">
                <label htmlFor="">Name:</label>
                <input type="text" className="form-control" value={name} onChange={zmienNazwe}/>
                <p> {name.length} / 170 </p>

            </div>

            <div className="form-check">
                <input id= "private_checkbox" type="checkbox" className="form-check-input" checked={isPublic} 
                onChange={e=>setisPublic(e.target.checked)} />
                <label htmlFor="private_checkbox" className="form-check-label"> Public </label></div>

            <div className="form-group">
                <label htmlFor="">Description:</label>
                <textarea className="form-control" value={description} onChange={event=>setDescription(event.target.value)}>
                </textarea>

                <button className="btn btn-danger" onClick={() => {props.onAnuluj() }}>Cancel</button>
                <button className="btn btn-success" onClick={() => {props.onZapisz({
                    description, id:props.playLista.id, name, public:isPublic
                }) }}>Save</button>
            
            </div>

        </div>
    )
}

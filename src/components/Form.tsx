import React, { useState } from 'react'

interface Props {

}
const playlist = {
    id: "213", name: "Rock123", public: true, description: "opis"
}


export const Form = (props: Props) => {
    const [name, setName] = useState(playlist.name)
    const [isPublic, setisPublic] = useState(playlist.public)
    const [description, setDescription] = useState(playlist.description)
    function zmienNazwe(event){
        console.log(event.target.value)
        setName(event.target.value)
    }
    return (
        <div>
            Formularz
            <pre>{JSON.stringify({name, public:isPublic, description}, null, 4)}</pre>
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
            </div>

        </div>
    )
}

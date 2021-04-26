import React, { useState } from 'react'

interface Props {

}
const playlist = {
    id: "213", name: "Rock123", public: true, description: "opis"
}


export const Form = (props: Props) => {
    const [name, setName] = useState("placki")
    function nameChange(event){
        console.log(event.target.value)
        setName(event.target.value)
    }
    return (
        <div>
            Formularz
            <div className="form-group">
                <label htmlFor="">Name:</label>
                <input type="text" className="form-control" value={name} onChange={nameChange}/>
                <p> {name.length} / 170 </p>

            </div>

            <div className="form-check">
                <input id= "private_checkbox" type="checkbox" className="form-check-input"  />
                <label htmlFor="private_checkbox" className="form-check-label"> Public </label></div>

            <div className="form-group">
                <label htmlFor="">Description:</label>
                <textarea className="form-control">
                </textarea>
            </div>

        </div>
    )
}

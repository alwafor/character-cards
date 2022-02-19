import React, {useState} from 'react'
import {PersonCard} from "./components/PersonCard"
import {IPersonData} from "./types/baseTypes"
import {basePersons} from "./data/persons"


function App() {
    const [persons, setPersons] = useState<IPersonData[]>(basePersons)

    return (
        <div className="App">
            {persons.map(person => <PersonCard personData={person} key={person.imageUrl}/>)}
        </div>
    )
}

export default App

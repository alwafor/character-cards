import React, {useState} from 'react'
import {PersonCard} from "./components/PersonCard"
import {IPersonData} from "./types/baseTypes"
import {basePersons} from "./data/persons"
import {Box} from "@chakra-ui/react";


function App() {
    const [persons, setPersons] = useState<IPersonData[]>(basePersons)

    return (
        <div className="App">
            <Box d={'flex'} justifyContent={'space-around'}>
                {persons.map(person => <PersonCard personData={person} key={person.imageUrl}/>)}
            </Box>
        </div>
    )
}

export default App

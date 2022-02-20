import React, {useState} from "react";
import {Box} from "@chakra-ui/react";
import {CardWrapper} from "../components/CardWrapper";
import {IPersonData} from "../types/baseTypes";
import {basePersons} from "../data/persons";

export const Main: React.FC = () => {
    const [persons, setPersons] = useState<IPersonData[]>(basePersons)

    return <Box>
        <CardWrapper persons={persons}/>
    </Box>
}
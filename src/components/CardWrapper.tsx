import {Box} from "@chakra-ui/react";
import {PersonCard} from "./PersonCard";
import React from "react";
import {IPersonData} from "../types/baseTypes";

interface IProps {
    persons: IPersonData[]
}

export const CardWrapper: React.FC<IProps> = ({persons}) => {
    return <Box d={'flex'} justifyContent={'space-around'}>
        {persons.map(person => <PersonCard personData={person} key={person.imageUrl}/>)}
    </Box>
}
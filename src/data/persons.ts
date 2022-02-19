import {IPersonData} from "../types/baseTypes"

import imgSam from './../assets/images/sam.jpg'
import imgDean from './../assets/images/dean.jpg'

export const basePersons: IPersonData[] = [{
    name: 'Sam Winchester',
    desc: 'One of the greatest monster hunters in the world',
    imageUrl: imgSam
},
    {
        name: 'Din Winchester',
        desc: 'One of the greatest monster hunters in the world',
        imageUrl: imgDean
    }
]
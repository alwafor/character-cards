import React from 'react'
import {Box, Image} from "@chakra-ui/react"
import {IPersonData} from "../types/baseTypes"
import {motion} from "framer-motion"

interface IProps {
    personData: IPersonData
}

const BoxMotion = motion(Box)

export const PersonCard: React.FC<IProps> = ({
                                                 personData: {
                                                     imageUrl,
                                                     name,
                                                     desc
                                                 }
                                             }) => {


    return (
        <Box
            d={'flex'}
            p={4}
            flexDirection={'column'}
            border={'1px solid gray'}
            justifyContent={'center'}
            alignItems={'center'}
            maxW={'500px'}
            borderRadius={'15px'}
            backgroundColor={'#e1e1e1'}
        >
            <Image userSelect={'none'} borderRadius={'100px'} src={imageUrl} boxSize={['50px', '100px']}
                   objectFit={'cover'}/>
            <BoxMotion color={'black'} fontSize={'24px'} fontWeight={'bold'}
                       initial={{
                           opacity: 0
                       }}
                       animate={{
                           opacity: 1
                       }}
                       transition={{duration: 2}}
            >
                {name}
            </BoxMotion>
            <BoxMotion
                initial={{
                    opacity: 0,
                    paddingRight: '150px'
                }}
                animate={{
                    paddingRight: 0,
                    opacity: 1
                }}
                transition={{duration: 2}}
            >
                {desc}
            </BoxMotion>

        </Box>
    )
}
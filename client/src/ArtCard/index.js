import React, { useState } from 'react'
import Modal from "../Modal";

import { Image, ModalImage, ModalTitle, ModalDescription } from './ArtCard.styles'

const ArtCard = ({ art }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
        <Image src={art.image} alt={art.name} onClick={() => setOpen((isOpen) => !isOpen)}/>
        <Modal isOpen={isOpen} close={() => setOpen(false)}> 
            <ModalImage src={art.image} alt={art.name}/>
            <ModalTitle>{art.name}</ModalTitle>
            <ModalDescription>{art.description}</ModalDescription>    
        </Modal>
        </>
        

    )                          
}

export default ArtCard;
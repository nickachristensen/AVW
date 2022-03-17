import React, { useEffect, useState } from 'react';
import ArtCard from '../ArtCard';

import { PortfolioCards } from './Portfolio.styles';

const Portfolio = () => {
const [art, setArt] = useState([]);

useEffect(() => {
    fetch('/../portfolios/')
    .then(resp => resp.json())
    .then(data => setArt(data))
}, [])


const artCards =art.map(art => 
    <ArtCard key={art.id} art={art}/>)

    return (
 
        <>
        <PortfolioCards>{artCards}</PortfolioCards>
        </>

    );
    }

export default Portfolio;

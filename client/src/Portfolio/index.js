import React, { useEffect, useState } from 'react';
import ArtCard from '../ArtCard';

import { Wrapper, PortfolioCards } from './Portfolio.styles';

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
 
        <Wrapper>
        <PortfolioCards>{artCards}</PortfolioCards>
        </Wrapper>

    );
    }

export default Portfolio;

import styled from "styled-components";

export const Wrapper = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    margin-top: 1rem;
    border-radius: 10px;

    @media (max-width: 600px) {
    background-size: initial;
    background-repeat: repeat;
  }
`;

export const Content = styled.div`
    background-color: rgba(0, 0, 0, 0.7);   
    border-radius: 10px;              
    padding: 1.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: auto;
    
    `;

export const Bio = styled.p`
    font-size: 2.5rem;
    color: white;
    font-family: 'Oswald', sans-serif;
    text-align: left;
    `;

export const Title = styled.h1`
    font-size: 2rem;
    font-family: 'Oswald', sans-serif;
    color: white;
    padding: .5rem;
    text-decoration: underline;
    `;

export const List = styled.li`
    color: white;
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    text-align: left;
    padding: .4rem;
    `;
    


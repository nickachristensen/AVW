import styled from "styled-components";

export const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    background-image: url(${props => props.img});
    background-size: cover;
    border-radius: 10px;

    @media (max-width: 600px) {
    background-size: cover;
    background-position: 69%;
    width: 37

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
    font-size: 2rem;
    color: white;

    @media (max-width: 600px) {
    font-size: 1rem;
    }
    `;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: white;
    padding: .5rem;
    text-decoration: underline;

    @media (max-width: 600px) {
    font-size: 1rem;
    }
    `;

export const List = styled.li`
    color: white;
    font-size: 1rem;
    text-align: left;
    padding: .5rem;

    @media (max-width: 600px) {
    font-size: .75rem;
    }
    `;
    



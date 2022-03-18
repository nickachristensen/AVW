import styled from "styled-components";

export const ModalImage = styled.img`
  width: auto;
  max-height: 700px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    max-width: 300px;
    height: auto;
  }
`
export const Image = styled.img `
    overflow: hidden;
    box-shadow: 2px 5px 10px black;
    cursor: pointer;
    max-width: 300px;
    height: auto;
    align-self: center;
    margin: 15px auto;
    transition: transform 200ms ease-in;
    
  

  
    &:hover {
      transform: scale(1.08);
      box-shadow: 2px 5px 10px black;
    }
`;

export const ModalTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: white;
  text-shadow: 0 0 5px black;
  `

export const ModalDescription = styled.p`
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color:white;
  text-shadow: 0 0 5px black;
  `

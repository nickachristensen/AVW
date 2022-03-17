import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-color: black;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5rem;
  border-bottom: 3px solid white;
  color: white;
  `

export const HeaderLogo = styled.img`
    width:  auto;
    max-height: 20rem;
    position: relative;
    display: block;

    @media (max-width: 600px) {
        width:  200px;
        height: auto;
        position: relative;
        align-items: center;
        left: -150%;
        padding-top: 10px;
        margin: 0;
        display: block;
        
    }
`;

export const Title = styled.h1`
    font-size: 5rem;
    color: white;
    padding: .5rem;
    padding-right: 20rem;
    `;

export const Buttons = styled.h3`
    font-size: 1.5rem;
    text-align: right;
    padding-right: 3rem;
    `;

export const ContactButton = styled.h3`
`;

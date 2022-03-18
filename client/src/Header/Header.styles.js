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

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0;
  }

  `

export const HeaderLogo = styled.img`
    width:  auto;
    max-height: 20rem;
    position: relative;
    display: block;
    right: 5rem;
    

    @media (max-width: 600px) {
        width:  200px;
        height: auto;
        position: relative;
        align-items: center;
        padding-top: 10px;
        margin: 0;
        display: block;
    }
`;

export const Title = styled.h1`
    font-size: 5rem;
    color: white;
    padding-right: 20rem;

    @media (max-width: 600px) {
        font-size: 2rem;
        padding-right: 0;
    }
    `;

export const Buttons = styled.h3`
    font-size: 1.5rem;
    text-align: right;
    padding-right: 4rem;
    text-decoration: none;

    @media (max-width: 600px) {
        font-size: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding: 0;
        margin: 0;
    }
    `;

export const PortfolioButton = styled.h3`
    color: white;
    padding-right: 1rem;
  `;

export const ContactButton = styled.h3`
`;

export const LinkWrap = styled.a`
    width:  12%;
`

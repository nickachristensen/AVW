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

    @media (max-width: 600px) {
        font-size: 2rem;
    }
    `;

export const Buttons = styled.h3`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
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
export const Content = styled.div`
 font-family: 'Montserrat', sans-serif;
 max-width: 500px;
 z-index: 1;

  @media (max-width: 600px) {
    max-height: 450px;
  }
`
export const FormTitle = styled.h3`
  display: flex;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  color:white;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`
export const P = styled.p`
  font-size: 1.5rem;
  text-align: center;
  justify-content: center;
  color:white;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0px;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 75%;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`
export const Button = styled.button`
  background-color: black;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px;
  margin-top: 10px;
  box-shadow: 2px 2px 4px white;
  border: 2px solid white;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
  `;
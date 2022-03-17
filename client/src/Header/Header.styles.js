import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5rem;
  border-bottom: 3px solid Black;
  `

export const HeaderLogo = styled.img`
    width:  auto;
    max-height: 20rem;
    position: relative;
    left: 0%;
    padding: 0;
    margin: 0;
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

export const Buttons = styled.h3`
    font-size: 1.5rem;
    text-align: right;
    padding-right: 3rem;
    `;

export const ContactButton = styled.h3`
`;

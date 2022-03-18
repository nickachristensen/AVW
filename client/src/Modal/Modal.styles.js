import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    
`;

export const Content = styled.div`
    background-color:black;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 3px 15px 8px rgba(0, 0, 0, 0.5);
    color: white;
    border: 2px solid white;

    @media (max-width: 600px) {
       width: 80%;
       max-height: 90%;
    }
    `;

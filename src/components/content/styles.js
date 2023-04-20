import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.backgroundColor};
    border: 15px solid #ce0628;
    transition: .6s ease-in-out;
    overflow: auto;
    box-shadow: 0 5px 10px 2px #00000020;
    width: 60%;
    height: 88%;
    margin: -14px auto 0 auto;
    padding: 30px 40px 0 30px;


    &::-webkit-scrollbar{
        width: 15px;
        padding:5px;
    }
    &::-webkit-scrollbar-track{
        background-color: #00000000;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.id === "light" ? "#00000070" : "#ffffff70"};
        border-radius: 30px;
    }
`
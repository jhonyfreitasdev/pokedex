import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #00000025;
    overflow: auto;
    box-shadow: 0 5px 10px 2px #00000070;
    width: 60%;
    height: 88%;
    margin: 0 auto;
    padding: 30px 40px;
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
`

export const Card = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px #00000060;
    border-radius: 10px;
`
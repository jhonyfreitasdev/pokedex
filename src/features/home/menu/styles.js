import styled from "styled-components";
import pokedex from "../../../_assets/images/pokedex.png"

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url(${pokedex}) left top no-repeat;
    background-size: cover;
    box-shadow: 0 3px 10px 6px #00000030;
    width: 60%;
    margin: 0 auto;
    padding: 15px;
` 

export const Image = styled.img`
    width: 40px;
`
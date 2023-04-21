import styled from "styled-components";
import pokedex from "../../../_assets/images/pokedex.png"

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    background: url(${pokedex}) left top no-repeat;
    background-size: cover;
    box-shadow: 0 3px 7px 5px #00000030;
    border-radius: 15px 15px 0 0;
    width: 78%;
    margin: 0 auto;
    padding: 15px 30px;

    h1{
        color: #ffffff;
        font-size: 3.5rem;
        font-weight: 700;
        text-shadow: 0 0 9px #00000037;
    }
` 

export const Image = styled.img`
    width: 50px;
    border-radius: 20px;
`
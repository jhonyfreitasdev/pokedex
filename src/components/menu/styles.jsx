import styled from "styled-components";
import pokedex from "../../assets/images/pokedex.png"
import { device } from "../../constants/device";

export const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    background: url(${pokedex}) left top no-repeat;
    background-size: cover;
    transition: .6s ease-in-out;
    box-shadow: 0 3px 7px 5px #00000030;
    border-radius: 15px 15px 0 0;
    width: 78%;
    height: 63px;
    margin: 0 auto;
    padding: 15px 30px;

    @media ${device.tablet} {
        padding: 5px;
    }
    @media ${device.mobileL} {
        width: 90%;
    }
`

export const Title = styled.h1` 
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;
    font-size: 3.5rem;
    text-shadow: 0 0 9px #00000037;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #303030;

    @media ${device.tablet} {
        font-size: 3rem;
    }
    @media ${device.tabletS} {
        font-size: 2.7rem;
        bottom: 0;
        left: 43%;
    }
    @media ${device.mobileL} {
        left: 50%;
    }
    @media ${device.mobileS} {
        left: 45%;
    }
`

export const Image = styled.img`
    width: 35px;
    border-radius: 20px;
`

export const Interaction = styled.div`
    display: flex;
    @media ${device.mobileL} {
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }
`
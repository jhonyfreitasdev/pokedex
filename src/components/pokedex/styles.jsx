import styled from "styled-components";
import { device } from "../../constants/device";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.backgroundColor};
    border: 15px solid #ee0d24;
    transition: .6s ease-in-out;
    overflow: auto;
    box-shadow: 0 5px 10px 2px #00000020;
    border-radius: 0 0 5px 5px ;
    width: 78%;
    max-height: 87%;
    margin: 0 auto;
    padding: 10px 30px 10px 30px;

    @media ${device.tabletS} {
        padding: 10px 10px 5px 10px;
    }
    @media ${device.mobileL} {
        width: 90%;
    }

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
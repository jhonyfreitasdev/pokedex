import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #ffffff75;
    align-items: center;
    border: 15px solid #ce0628;
    overflow: auto;
    box-shadow: 0 5px 10px 2px #00000020;
    width: 60%;
    height: 88%;
    margin: -14px auto 0 auto;
    padding: 30px 40px 0 30px;
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

export const Card = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => {
        console.log(props);
        
        const pokemonType = [props.pokemon.types] 
        const typeColor = props.theme.pokemonTypesBackground        
        return typeColor[pokemonType] 
    }};
    box-shadow: 0 5px 5px 3px #00000020;
    border: solid 5px #00000032;
    border-radius: 10px;
    width: 150px;
    height: 215px;

    &:hover > img{
        width: 115%;
    }
    &:hover > h2{
        font-size: 2.1rem;
        text-shadow: 0 0 7px #00000099;
        padding: 7px;
    }

    img{
        transition: 0.4s ease-in-out;
        width: 100%;
    }

    h2{
        background-color: #00000032;
        color: #ffffff;
        font-size: 2rem;
        text-shadow: 0 0 5px #000000aa;
        text-align: center;
        border-radius: 0 0 5px 5px;
        padding: 7px;
        width: 100%;
    }
` 

export const Button = styled.button`
    background-color: #ce0628;
    color: #ffffffdd;
    font-size: 1.9rem;
    font-weight: 400;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    border: 1px solid #00000020;
    border-radius: 15px;
    margin: 40px 0 10px 0; 
    padding: 8px;
    width: 230px;

    &:hover{
        transform: translateY(-2px);
        color: #ffffff;
    }
`
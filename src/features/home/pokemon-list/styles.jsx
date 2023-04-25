import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

export const Card = styled.li`
    display: flex;
    flex-direction: column;
    transition: .4s ease-in-out;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => {        
        const pokemonType = [props.pokemon.types] 
        const typeColor = props.theme.pokemonTypesBackground        
        return typeColor[pokemonType] 
    }};
    box-shadow: 0 5px 5px 3px #00000020;
    border: solid 5px #00000032;
    border-radius: 10px;
    width: 140px;
    height: 170px;

    h2{
        background-color: #00000032;
        color: #ffffff;
        font-size: 2rem;
        text-shadow: 0 0 5px #000000aa;
        text-align: center;
        transition: .4s ease-in-out;
        border-radius: 0 0 5px 5px;
        padding: 3px;
        width: 100%;
    }
    &:hover > h2{
        color: ${props => {       
        const pokemonType = [props.pokemon.types] 
        const typeColor = props.theme.pokemonTypesBackground        
        return typeColor[pokemonType] 
        }}; 
        text-shadow: 0 0 5px #000000;
    }
` 

export const Image = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 7px;

    img{
        min-width: 43%;
    }
`

export const Button = styled.button`
    background-color: #ee0d24;
    color: #ffffffdd;
    font-family: 'Patrick Hand SC', cursive;
    font-size: 2rem;
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
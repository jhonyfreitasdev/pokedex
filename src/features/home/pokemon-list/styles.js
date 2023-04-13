import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #ffffff75;
    align-items: center;
    overflow: auto;
    box-shadow: 0 5px 10px 2px #00000020;
    width: 60%;
    height: 88%;
    margin: 0 auto;
    padding: 30px 40px;
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
    box-shadow: 0 5px 5px 3px #00000020;
    border: solid 1px #00000060;
    border-radius: 10px;
    padding: 10px;
    width: 150px;
    height: 215px;

    background-color: ${props => {
        const pokemonType = [props.pokemon.types[0][0]] 
        const typeColor = props.theme.pokemonTypesBackground        
        return typeColor[pokemonType] 
    }};

    img{
        width: 100%;
    }

    h2{
        color: #ffffff;
        font-size: 2rem;
        text-shadow: 0 0 5px #000000aa;
    }
` 

export const Button = styled.button`
    background-color: #ce0628;
    color: #FFFFFF;
    font-size: 1.9rem;
    font-weight: 400;
    cursor: pointer;
    border-radius: 15px;
    margin: 35px 0 10px 0; 
    padding: 8px;
    width: 230px;
`
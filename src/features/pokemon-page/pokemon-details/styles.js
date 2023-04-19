import styled, { css } from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => {
        const pokemonType = [props.pokemon.types[0]] 
        const typeColor = props.theme.pokemonTypesBackground        
        return typeColor[pokemonType] 
    }};
    border: 10px solid #0000002a;
    border-radius: 15px;
    padding: 15px;
    width: 85%;
    height: 90%;

    a{
        position: absolute;
        right: -25px;
        top: -25px;
        background-color: #fafafa;
        font-size: 2rem;
        text-align: center;
        border-radius: 50%;
        border: 3px #ce0628aa solid;
        padding: 9px 12px;
    }
`

export const Card = styled.div`
    background-color: #00000033;
    text-align: center;
    border-radius: 15px 15px 8px 8px;
    box-shadow: 0 0 10px 2px #00000030;
    width: 45%;
`

export const Image = styled.img`
width: 60%;
`

export const Description = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #00000026;
    color: #ffffff;
    font-size: 1.3rem;
    border-radius: 0 0 8px 8px;
    padding: 7px 15px;
`

export const Title = styled.h2`
    background-color: ${props => {
        const pokemonType = [props.pokemon.types[0]] 
        const typeColor = props.theme.pokemonTypesBackground        
        return typeColor[pokemonType] 
    }};
    border-radius: 5px;
    padding: 4px;
`

export const Type = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    h2{
        background-color: ${props => {
            const pokemonType = [props.pokemon.types[0]] 
            const typeColor = props.theme.pokemonTypesBackground        
            return typeColor[pokemonType] 
        }};
        border-radius: 5px;
        padding: 4px;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 25px 0;
    width: 45%;
`

export const ButtonMove = styled.button`
    background-color: #ffffff;  
    transition: .3s ease-in-out;
    border-radius: 8px;
    box-shadow: 0 0 10px 2px #00000030;
    cursor: pointer;
    padding: 7px 15px;

    ${props => props.status && css`
        background-color: black;
    `}
`

export const ButtonAbility = styled.button`
    background-color: #ffffff;  
    transition: .3s ease-in-out;
    border-radius: 8px;
    box-shadow: 0 0 10px 2px #00000030;
    cursor: pointer;
    padding: 7px 15px;

    ${props => props.status && css`
        background-color: black;
    `}
`

export const List = styled.ul`
    background-color: #00000033;
    color: #ffffff;
    overflow: auto;
    border-radius: 8px; 
    box-shadow: 0 0 5px 4px #00000045;
    border: 1px solid #00000035;
    width: 70%;
    height: 35%;
`

export const ListTitle = styled.li`
    h2{
        font-size: 1.7rem;
        font-weight: bold;
    }
`

export const Item = styled.li`
    background-color: ${props => {
        const pokemonType = [props.pokemon.types[0]] 
        const typeColor = props.theme.pokemonTypesBackground        
        return typeColor[pokemonType] 
    }};
    border-radius: 8px;
    margin: 15px;
    padding: 10px;

    h3{
        color: #000000c9;
        font-size: 1.6rem;
        font-weight: bold;
        text-transform: capitalize;
        margin-bottom: 4px;
    }

    p{
        font-size: 1.3rem;
    }
`

export const Message = styled.p`
    transform: translateY(300%);
    font-size: 1.8rem;
    text-align: center;
    color: #ffffffaa;
`
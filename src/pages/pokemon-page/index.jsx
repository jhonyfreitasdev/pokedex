import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

import { Menu } from "../menu"
import { Pokedex } from "../../components/pokedex"
import { PokemonDetails } from "../../components/pokemon-details"

import { Container } from "./styles";

export const PokemonPage = () => {

    const {theme} = useContext(ThemeContext)

    return(
        <Container theme={theme}>
            <Menu />
            <Pokedex> 
                <PokemonDetails/>
            </Pokedex>
        </Container>
    )
}
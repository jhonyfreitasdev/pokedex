import { useContext } from "react";
import { ThemeContext } from "../../../context/theme-context";

import { Menu } from "../../../components/menu/pages/index";
import { Pokedex } from "../../pokedex";
import { PokemonDetails } from "../pokemon-details";

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
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

import { Menu } from "../../components/menu/pages/index";
import { Pokedex } from "../../components/pokedex";
import { PokemonList } from "../../components/home/pokemon-list";

import { Container } from "./styles";

export const Home = () => {

    const {theme} = useContext(ThemeContext)

    return(
        <Container theme={theme}>
            <Menu />
            <Pokedex> 
                <PokemonList />
            </Pokedex>
        </Container>
    )
}
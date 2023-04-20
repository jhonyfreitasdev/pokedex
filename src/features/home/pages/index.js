import { useContext } from "react";
import { ThemeContext } from "../../../context/theme-context";

import { Menu } from "../../../components/menu/pages/index";
import { Content } from "../../../components/content";
import { PokemonList } from "../pokemon-list";

import { Container } from "./styles";

export const Home = () => {

    const {theme} = useContext(ThemeContext)

    return(
        <Container theme={theme}>
            <Menu />
            <Content> 
                <PokemonList />
            </Content>
        </Container>
    )
}
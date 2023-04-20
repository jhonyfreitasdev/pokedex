import { useContext } from "react";
import { ThemeContext } from "../../../context/theme-context";

import { Menu } from "../../../components/menu/pages/index";
import { Content } from "../../../components/content";
import { PokemonDetails } from "../pokemon-details";

import { Container } from "./styles";

export const PokemonPage = () => {

    const {theme} = useContext(ThemeContext)

    return(
        <Container theme={theme}>
            <Menu />
            <Content> 
                <PokemonDetails/>
            </Content>
        </Container>
    )
}
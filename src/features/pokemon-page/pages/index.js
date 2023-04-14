import { Menu } from "../../../components/menu/pages/index";
import { Content } from "../../../components/content";
import { PokemonDetails } from "../pokemon-details";

import { Container } from "./styles";

export const PokemonPage = () => {
    return(
        <Container>
            <Menu />
            <Content> 
                <PokemonDetails/>
            </Content>
        </Container>
    )
}
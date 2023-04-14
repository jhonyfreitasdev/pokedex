import { Menu } from "../../../components/menu/pages/index";
import { Content } from "../../../components/content";
import { PokemonList } from "../pokemon-list";

import { Container } from "./styles";

export const Home = () => {
    return(
        <Container>
            <Menu />
            <Content> 
                <PokemonList />
            </Content>
        </Container>
    )
}
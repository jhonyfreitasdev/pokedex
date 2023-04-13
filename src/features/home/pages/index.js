import { Menu } from "../menu/pages";
import { PokemonList } from "../pokemon-list";
import { Container } from "./styles";

export const Home = () => {
    return(
        <Container>
            <Menu />
            <PokemonList />
        </Container>
    )
}
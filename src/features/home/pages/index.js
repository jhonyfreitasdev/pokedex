import { Menu } from "../menu";
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
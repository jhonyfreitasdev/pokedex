import { Menu } from "../menu";
import { List } from "../pokemon-list";
import { Container } from "./styles";

export const Home = () => {
    return(
        <Container>
            <Menu />
            <List />
        </Container>
    )
}
import { ToggleButton } from "../toggle-button";
import { Header, Image } from "./styles";
import light from "../../../_assets/images/light-pokedex.gif"

export const Menu = () => {
    return(
        <Header>
            <Image src={light} alt=""/>
            <h1>Pokédex</h1>
            <ToggleButton />
        </Header>
    )
}
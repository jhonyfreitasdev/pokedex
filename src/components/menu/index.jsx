import light from "../../_assets/images/light-pokedex.gif"
import { ToggleButton } from "../../components/toggle-button";
import { TypeSelector } from "../type-selector";


import { Header, Image } from "./styles";

export const Menu = () => {
    return(
        <Header>
            <Image src={light} alt=""/>
            <h1>Pokédex</h1>
            <TypeSelector />
            <ToggleButton />
        </Header>
    )
}
import light from "../../assets/images/light-pokedex.gif"
import { ToggleButton } from "../../components/toggle-button";
import { TypeSelector } from "../type-selector";


import { Header, Image, Title, Interaction } from "./styles";

export const Menu = () => {
    return(
        <Header>
            <Image src={light} alt=""/>
            <Title>Pokédex</Title>
            <Interaction>
                <TypeSelector />
                <ToggleButton />
            </Interaction>
        </Header>
    )
}
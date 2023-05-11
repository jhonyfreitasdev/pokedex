import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

import { Main } from "./styles"
 
export const Pokedex = ({children}) => {

    const {theme} = useContext(ThemeContext)

    return(
        <Main theme={theme}>
            {children}
        </Main>
    )
}
import { Main } from "./styles"
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
 
export const Pokedex = ({children}) => {

    const {theme} = useContext(ThemeContext)

    return(
        <Main theme={theme}>
            {children}
        </Main>
    )
}
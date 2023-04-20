import { Main } from "./styles"
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
 
export const Content = ({children}) => {

    const {theme} = useContext(ThemeContext)

    return(
        <Main theme={theme}>
            {children}
        </Main>
    )
}
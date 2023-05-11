import { useContext } from "react"
import Switch from "react-switch"

import { themes, ThemeContext } from "../../context/theme-context"

import { Dark, Light } from "./styles"
import "./index.css"

export const ToggleButton = () => {    

    const { theme, toggleTheme } = useContext(ThemeContext)

    return(            
        <Switch
            onChange={toggleTheme}
            checked={theme === themes.light}
            uncheckedIcon={<Dark> <i className="fa-solid fa-moon"></i> </Dark>}
            checkedIcon={<Light> <i className="fa-solid fa-sun"></i> </Light>}
            onColor="#ccc"
            className="switch"
        />
    )
}
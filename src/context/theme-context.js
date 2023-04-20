import { createContext, useState } from "react";

import dayBackground from "../_assets/images/day-background.jpg"
import nightBackground from "../_assets/images/night-background.jpg"

export const themes = {
    light: {
        id: "light",
        backgroundImage: dayBackground,
        backgroundColor: "#ffffff75"
    },
    dark: {
        id: "dark",
        backgroundImage: nightBackground,
        backgroundColor: "#00000075"
    }
}

export const ThemeContext = createContext()

export const BackgroundProvider = (props) => {

    const [theme, setTheme] =useState(themes.light)

    const toggleTheme = () => {
        setTheme((curr) => curr === themes.light? themes.dark : themes.light)
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
import { createContext, useState } from "react";

export const FilterContext = createContext()

export const TypeFilterProvider = (props) => {

    const [type, setType] = useState("all")

    return(
        <FilterContext.Provider value={{type, setType}}>
            {props.children}
        </FilterContext.Provider>
    )
}
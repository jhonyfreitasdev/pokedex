import React from "react"
import "@testing-library/jest-dom"
import { render} from "@testing-library/react"
import { PokemonList } from "."

describe("PokemonList", () => {
    it("should render correctly", () => {
        const { getByText } = render(<PokemonList />)

        expect(getByText("Carregar mais Pokemon...")).toBeInTheDocument()
    })
})

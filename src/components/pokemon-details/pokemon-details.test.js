import React from "react"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { PokemonDetails } from "./"
 
describe("PokemonDetails", () => {
    it("should render correctly", () => {
        const { getByText } = render(<PokemonDetails />)

        expect(getByText("Moves")).toBeInTheDocument()
    })
})
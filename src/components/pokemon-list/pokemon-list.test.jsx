import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import { PokemonList } from "."

describe("PokemonList", () => {
    it("should render correctly", () => {
        const { getByText } = render(<PokemonList />)

        expect(getByText("Carregar mais Pokemon...")).toBeInTheDocument()
    })

    it('It should return the correct status value', () => {
        render(<PokemonList />);
        const countLimit = screen.getByTestId('countLimit')
        
        expect(countLimit.textContent).toBe(10);
    })
})
import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen, waitFor} from "@testing-library/react"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import { PokemonList } from "."


describe("PokemonList", () => {
    it("should render correctly", () => {
        const { getByText } = render(<PokemonList />)

        expect(getByText("Carregar mais Pokemon...")).toBeInTheDocument()
    })

    it("should call pokemons page when click the button", async () => {
        render(<PokemonList/>)

        await waitFor(() => {
            fireEvent.click(screen.findAllByTestId("pokemon-card"))
        })
        expect(window.location.pathname).toBe("/pokemons/")
         
    })
})

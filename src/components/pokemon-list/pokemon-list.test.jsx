import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Enzyme, { shallow } from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-15';
import { PokemonList } from "."

Enzyme.configure({ adapter: new Adapter() });

const mockNavigate = jest.fn()
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate
}))

describe("PokemonList", () => {
    it("should render correctly", () => {
        render(<PokemonList />)

        expect(screen.getByText("Carregar mais Pokemon...")).toBeInTheDocument()
    })

    it("should call pokemon page when click the button", () => {
        //usar o find pra pegar os botões
    })

    it("should increment state when click the button", () => {
        
        const wrapper = shallow(<PokemonList />)
        expect(wrapper.state(countLimit)).toEqual(10)
    })
})
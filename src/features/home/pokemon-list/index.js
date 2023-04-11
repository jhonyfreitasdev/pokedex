import { useEffect, useState } from "react"
import { getPokemons } from "../../../services/poke-api"
import { Main } from "./styles"

export const List = () => {

    const [pokedex, setPokedex] = useState({
        pokemons: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await getPokemons()
            let pokemonList = []
            let count = 1

            pokemonData.results.forEach(item => {
                pokemonList = [
                    ...pokemonList,
                    {
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count}.png`,
                        name: item.name
                    }
                ]
                count = count + 1

                setPokedex({
                    pokemons: pokemonList
                })
            })

            

        }
        fetchData()
    }, [])

    return (

        <Main>
            {
                pokedex.pokemons !== "" ?
                <ul>
                    {
                        pokedex.pokemons.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={item.image} alt={`imagem do ${item.name}`} />
                                    <h2> {item.name} </h2>
                                </li>
                            )
                        })
                    }
                </ul> : ""
            }
        </Main>
    )
}
import { useEffect, useState } from "react"
import { getPokemons } from "../../../services/poke-api"
import { Main, List, Card } from "./styles"

export const PokemonList = () => {

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
            <List>
                {
                    pokedex.pokemons.map((item, index) => {
                        return (
                            <Card key={index}>
                                <img src={item.image} alt={`imagem do ${item.name}`} />
                                <h2> {item.name} </h2>
                            </Card>
                        )
                    })
                }
            </List>
        </Main>
    )
}
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPokemons } from "../../services/poke-api"

import { List, Card, Image, Button } from "./styles"

export const PokemonList = () => {

    const [pokedex, setPokedex] = useState({
        pokemons: []
    })

    const [countLimit, setCountLimit] = useState(10)

    useEffect(() => {

        const fetchData = async () => {
            const listPokemonUrl = limit => { return `https://pokeapi.co/api/v2/pokemon/?limit=${limit}` };
            const pokemonData = await getPokemons(listPokemonUrl(countLimit))

            let pokemonName = []
            pokemonData.results.forEach(item => {
                pokemonName = [...pokemonName, item.name]
            })

            let pokemonList = []
            pokemonName.forEach(item => {
                const pokeDetailsUrl = pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon}`

                const getPokemonDetails = async () => {
                    const pokemonData = await getPokemons(pokeDetailsUrl(item))

                    pokemonList = [
                        ...pokemonList,
                        {
                            image: pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default,
                            name: pokemonData.name,
                            types: pokemonData.types[0].type.name
                        }
                    ]

                    setPokedex({
                        pokemons: pokemonList
                    })
                }

                getPokemonDetails()
            })
        }
        fetchData()
    }, [countLimit])

    const showMorePokemons = () => {
        setCountLimit(countLimit + 10)
    }

    return (
        <>
            <List>
                {
                    pokedex.pokemons.map((item, index) => {
                        return (
                            <Link to={`/pokemons/${item.name}`} key={index}>
                                <Card pokemon={item}>
                                    <Image>
                                        <img src={item.image} alt={`imagem do ${item.name}`} />
                                    </Image>
                                    <h2> {item.name} </h2>
                                </Card>
                            </Link>
                        )
                    })
                }    
            </List>
                
            <Button type="button" onClick={showMorePokemons}>Carregar Mais ...</Button>
        </>
    )
}
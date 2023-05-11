import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getPokemons } from "../../services/poke-api"

import { List, Card, ContainerImage, Button } from "./styles"

export const PokemonList = () => {

    const [countLimit, setCountLimit] = useState(10)

    const [pokedex, setPokedex] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const pokemonsListUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${countLimit}`;
            const pokemonData = await getPokemons(pokemonsListUrl)

            const pokemonNameList = pokemonData.results.map(poke => poke.name)

            const pokemonList = await Promise.all (pokemonNameList.map( name => {
                const pokemonDataUrl = `https://pokeapi.co/api/v2/pokemon/${name}`
                
                const getPokemonData = async (url) => {
                    const pokemonData = await getPokemons(url)

                    return {
                        image: pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default,
                        name: pokemonData.name,
                        type: pokemonData.types[0].type.name
                    }

                }

                return getPokemonData(pokemonDataUrl)
            }))
            
            setPokedex(pokemonList)
        }

        fetchData()
    }, [countLimit])

    return (
        <>
            <List>
                {
                    pokedex.map((pokemon, index) => {
                        return (
                            <Link to={`/pokemons/${pokemon.name}`} key={index}>
                                <Card pokemon={pokemon}>
                                    <ContainerImage> 
                                        <img src={pokemon.image} alt={`imagem do ${pokemon.name}`} />
                                    </ContainerImage>
                                    <h2> {pokemon.name} </h2>
                                </Card>
                            </Link>
                        )
                    })
                }    
            </List>
                
            <Button type="button" onClick={() => setCountLimit(countLimit + 10)}>Carregar mais Pokemon...</Button>
        </>
    )
}
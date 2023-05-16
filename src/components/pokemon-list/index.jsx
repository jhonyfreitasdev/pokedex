import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"

import { getPokemons } from "../../services/poke-api"
import { FilterContext } from "../../context/filter-context"

import { List, Card, ContainerImage, Button } from "./styles"

export const PokemonList = () => {

    const [counterLimit, setCounterLimit] = useState(10)
    const [pokedex, setPokedex] = useState([])
    const { type } = useContext(FilterContext)

    useEffect(() => {

        const fetchData = async () => {

            let pokemonNameList;
            if (type === "all") {
                const pokemonData = await getPokemons(`https://pokeapi.co/api/v2/pokemon/?limit=${counterLimit}/`)
                pokemonNameList = pokemonData.results.map(poke => poke.name)
            } else {
                const typeData = await getPokemons(`https://pokeapi.co/api/v2/type/${type}/`)

                let pokemonNameFiltered = []
                for (let i = 0; i < counterLimit; i++) {
                    if (typeData.pokemon[i] !== undefined) {
                        pokemonNameFiltered.push(typeData.pokemon[i].pokemon.name)
                    } else {
                        alert("Não é há mais pokemons deste tipo")
                        return
                    }
                }
                pokemonNameList = pokemonNameFiltered
            }

            const pokemonList = await Promise.all(pokemonNameList.map(name => {
                const getPokemonData = async () => {
                    const pokemonData = await getPokemons(`https://pokeapi.co/api/v2/pokemon/${name}`)

                    if (pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default !== null) {
                        return {
                            image: pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default,
                            name: pokemonData.name,
                            type: pokemonData.types[0].type.name
                        }
                    } else {
                        return {
                            image: pokemonData.sprites.front_default,
                            name: pokemonData.name,
                            type: pokemonData.types[0].type.name
                        }
                    }
                }

                return getPokemonData()
            }))

            setPokedex(pokemonList)
        }

        fetchData()
    }, [counterLimit, type])

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

            <Button type="button" onClick={() => setCounterLimit(counterLimit + 10)}>Carregar mais Pokemon...</Button>
        </>
    )
}
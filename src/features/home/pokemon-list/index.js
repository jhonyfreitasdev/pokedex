import { useEffect, useState } from "react"
import { getPokemons } from "../../../services/poke-api"
import { Main, List, Card } from "./styles"

export const PokemonList = () => {

    const [pokedex, setPokedex] = useState({
        pokemons: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const listPokemonUrl =  limit => {return `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`};
            const pokemonData = await getPokemons(listPokemonUrl(15))
            
            let pokemonName = []
            pokemonData.results.forEach(item => {
                pokemonName = [...pokemonName, item.name]    
            })
            
            let pokemonList = []
            pokemonName.forEach(item => {
                const detailsPokemonUrl = pokemon => {return `https://pokeapi.co/api/v2/pokemon/${pokemon}`}

                const getDetailsPokemon = async () => {
                    const pokemonData = await getPokemons(detailsPokemonUrl(item))
                    pokemonList = [
                        ...pokemonList,
                        {
                            abilities: [pokemonData.abilities.map(item => {return item.ability.name})],
                            image: pokemonData.sprites.front_default,
                            moves: [pokemonData.moves.map(item => {return item.move.name})],
                            name: pokemonData.name,
                            types: [pokemonData.types.map(item => {return item.type.name})]
                        }
                    ]

                    setPokedex({
                        pokemons: pokemonList
                    })
                }

                getDetailsPokemon()
            })
        }
        fetchData()
    }, [])

    console.log(pokedex);

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
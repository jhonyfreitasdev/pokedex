import { useEffect, useState,useContext } from "react"
import { Link } from "react-router-dom"

import { getPokemons } from "../../services/poke-api"
import { FilterContext } from "../../context/filter-context"

import { List, Card, ContainerImage, Button } from "./styles"

export const PokemonList = () => {

    const [countLimit, setCountLimit] = useState(10)
    const [pokedex, setPokedex] = useState([])
    const { type } = useContext(FilterContext)

    useEffect(() => {

        const fetchData = async () => {

            let pokemonNameList;
            if (type === "all"){
                const pokemonData = await getPokemons("https://pokeapi.co/api/v2/pokemon/")
                console.log(pokemonData);
                pokemonNameList = pokemonData.results.map(poke => poke.name)
            }else{
                const typeData = await getPokemons(`https://pokeapi.co/api/v2/type/${type}/`)
                pokemonNameList = typeData.pokemon.map(poke => poke.pokemon.name)
            }
            
            console.log(pokemonNameList);
            const pokemonList= await Promise.all (pokemonNameList.map( name => {                
                const getPokemonData = async () => {
                    const pokemonData = await getPokemons(`https://pokeapi.co/api/v2/pokemon/${name}`)

                    return {
                        image: pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default,
                        name: pokemonData.name,
                        type: pokemonData.types[0].type.name
                    }
                }

                return getPokemonData()
            }))
        
            setPokedex(pokemonList)
        }

        fetchData()
    }, [countLimit, type])

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
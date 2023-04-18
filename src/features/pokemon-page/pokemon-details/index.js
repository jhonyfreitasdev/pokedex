import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { getPokemons } from "../../../services/poke-api"

import { Container, Image, Description, H2, ContainerButtons, Button, List } from "./styles"

export const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState({ types: "" })
    const [list, setList] = useState()

    const { id } = useParams()
    const pokeDetailsUrl = `https://pokeapi.co/api/v2/pokemon/${id}`

    useEffect(() => {
        async function fetchData() {
            const pokemonData = await getPokemons(pokeDetailsUrl)
            const details = {
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                types: pokemonData.types.map(item => item.type.name)
            }
            setPokemon(details)
        }

        fetchData()
    }, [pokeDetailsUrl])


    const showMoves = async () => {
        const pokemonData = await getPokemons(pokeDetailsUrl)
        const movesNameList = pokemonData.moves.map(item => item.move.name)

        let movesList = []
        movesNameList.forEach(item => {

            const getMoveDetails = async () => {
                const moveData = await getPokemons(`https://pokeapi.co/api/v2/move/${item}`)

                movesList = [
                    ...movesList,
                    {
                        name: moveData.name,
                        description: moveData.flavor_text_entries[2].flavor_text,
                        type: moveData.type.name
                    }
                ]

                setList(movesList)
            }
            getMoveDetails()
        })
    }

    const showAbilities = async () => {
        const pokemonData = await getPokemons(pokeDetailsUrl)
        const abilitiesNameList = pokemonData.abilities.map(item => item.ability.name)

        let abilitiesList = []
        abilitiesNameList.forEach(item => {

            const getAbilityDetails = async () => {
                const abilityData = await getPokemons(`https://pokeapi.co/api/v2/ability/${item}`)

                abilitiesList = [
                    ...abilitiesList,
                    {
                        name: abilityData.name,
                        description: abilityData.effect_entries[0].effect
                    }
                ]

                setList(abilitiesList)
            }
            getAbilityDetails()
        })
    }



    return (
        <Container pokemon={pokemon}>
            {
                pokemon.types !== "" ?
                    <>
                        <Link to="/"> X </Link>
                        <Image src={pokemon.image} alt={`Imagem do ${pokemon.name}`} />
                        <Description>
                            <H2>{pokemon.name}</H2>
                            {
                                pokemon.types.map((type, index) => {
                                    return (
                                        <H2 key={index}>{type}</H2>
                                    )
                                })
                            }
                        </Description>
                        <ContainerButtons>
                            <Button type="button" onClick={showMoves}> Moves </Button>
                            <Button type="button" onClick={showAbilities}> Abilities </Button>
                        </ContainerButtons>
                        <List>
                            {
                                list !== undefined ?
                                    <>
                                        {
                                            list.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <h3>{item.name}</h3>
                                                        <p>{item.description}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </>
                                    : ""
                            }
                        </List>
                    </>
                    : ""
            }
        </Container>
    )
}
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { getPokemons } from "../../services/poke-api"
import { types } from "../../constants/types"

import { Container, Card, ContainerImage, Description, Title, Type, ContainerButtons, Button, List, Item, Message } from "./styles"

export const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState()
    const [list, setList] = useState()
    const [buttonActive, setButtonActive] = useState()

    const { name } = useParams()
    const pokeDetailsUrl = `https://pokeapi.co/api/v2/pokemon/${name}`

    useEffect(() => {
        async function fetchData() {
            const pokemonData = await getPokemons(pokeDetailsUrl)
            const pokemon = {
                name: pokemonData.name,
                image: pokemonData.sprites.versions['generation-v']['black-white'].animated.front_default,
                types: pokemonData.types.map(item => item.type.name)

            }
            setPokemon(pokemon)
        }

        fetchData()
    }, [pokeDetailsUrl])


    const showMoves = async () => {
        const pokemonData = await getPokemons(pokeDetailsUrl)
        const movesNameList = pokemonData.moves.map(item => item.move.name)

        const movesList = await Promise.all(movesNameList.map(move => {
            const getMoveDetails = async () => {
                const moveData = await getPokemons(`https://pokeapi.co/api/v2/move/${move}`)
                const filteredDescription = moveData.flavor_text_entries.find(obj => obj.language.name === 'en')
                
                if (filteredDescription === undefined) {
                    return { name: moveData.name, description: 'No description'}
                }else{
                    return { name: moveData.name, description: filteredDescription.flavor_text }
                }
            }

            return getMoveDetails()
        }))

        setList(movesList)
        setButtonActive("moves")
    }

    const showAbilities = async () => {
        const pokemonData = await getPokemons(pokeDetailsUrl)
        const abilitiesNameList = pokemonData.abilities.map(item => item.ability.name)

        const abilityList = await Promise.all(abilitiesNameList.map(ability => {

            const getAbilityDetails = async () => {
                const abilityData = await getPokemons(`https://pokeapi.co/api/v2/ability/${ability}`)
                const filteredDescription = abilityData.effect_entries.find(obj => obj.language.name === 'en')

                return {
                    name: abilityData.name,
                    description: filteredDescription.effect
                }
            }

            return getAbilityDetails()
        }))

        setList(abilityList)
        setButtonActive("abilities")
    }

    return (
        <Container pokemon={pokemon}>
            {
                pokemon !== undefined ?
                    <>
                        <Link to="/"> X </Link>

                        <Card pokemon={pokemon}>
                            <ContainerImage>
                                <img src={pokemon.image} alt={`Imagem do ${pokemon.name}`} />
                            </ContainerImage>

                            <Description>
                                <Title pokemon={pokemon}>{pokemon.name}</Title>

                                <Type pokemon={pokemon}>
                                    {
                                        pokemon.types.length === 2 ?
                                            <>
                                                <img src={types.pokemonImageBackground[pokemon.types[0]]} alt={pokemon.types[0]} />
                                                <img src={types.pokemonImageBackground[pokemon.types[1]]} alt={pokemon.types[1]} />
                                            </>
                                            : <img src={types.pokemonImageBackground[pokemon.types[0]]} alt={pokemon.types[0]} />
                                    }
                                </Type>
                            </Description>
                        </Card>

                        <ContainerButtons>
                            <Button pokemon={pokemon} type="button" status={buttonActive === "moves" ? true : false} onClick={showMoves}>
                                Moves
                            </Button>

                            <Button pokemon={pokemon} type="button" status={buttonActive === "abilities" ? true : false} onClick={showAbilities}>
                                Abilities
                            </Button>
                        </ContainerButtons>

                        <List pokemon={pokemon}>
                            {
                                list !== undefined ?
                                    <>
                                        {
                                            list.map((item, index) => {
                                                return (
                                                    <Item pokemon={pokemon} key={index}>
                                                        <h3>{item.name}</h3>
                                                        {
                                                            item.description !== undefined ?
                                                            <p>{item.description}</p>
                                                            : ""
                                                        }
                                                    </Item>
                                                )
                                            })
                                        }
                                    </>
                                    : <Message> Selecione no botão a lista que deseja ver </Message>
                            }
                        </List>
                    </>
                    : ""
            }
        </Container>
    )
}
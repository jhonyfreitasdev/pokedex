import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { getPokemons } from "../../services/poke-api"
import { types } from "../../constants/types"

import { Container, Card, Image, Description, Title, Type, ContainerButtons, Button, List, Item, Message } from "./styles"

export const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState()
    const [list, setList] = useState()
    const [buttonActive, setButtonActive] = useState()

    const {name } = useParams()
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

        const movesList = await Promise.all (movesNameList.map(move => {
            const getMoveDetails = async () => {
                const moveData = await getPokemons(`https://pokeapi.co/api/v2/move/${move}`)

                return {
                    name: moveData.name,
                    description: moveData.flavor_text_entries[2].flavor_text,
                    type: moveData.type.name
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

        const abilityList = await Promise.all (abilitiesNameList.map(ability => {

            const getAbilityDetails = async () => {
                const abilityData = await getPokemons(`https://pokeapi.co/api/v2/ability/${ability}`)

                return {
                    name: abilityData.name,
                    description: abilityData.effect_entries[0].effect
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
                        <Image>
                            <img src={pokemon.image} alt={`Imagem do ${pokemon.name}`} />
                        </Image>

                        <Description>
                            <Title pokemon={pokemon}>{pokemon.name}</Title>

                            <Type pokemon={pokemon}>
                                {
                                    pokemon.types.length === 2 ? 
                                    <>
                                        <h2 style={{backgroundColor: types.pokemonTypesBackground[pokemon.types[0]]}}>{pokemon.types[0]}</h2>
                                        <h2 style={{backgroundColor: types.pokemonTypesBackground[pokemon.types[1]]}}>{pokemon.types[1]}</h2>
                                    </>
                                    : <h2 style={{backgroundColor: types.pokemonTypesBackground[pokemon.types[0]]}}>{pokemon.types[0]}</h2>
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
                                                <p>{item.description}</p>
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
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { getPokemons } from "../../../services/poke-api"

import { Container, Card, Image, Description, Title, Type, ContainerButtons, Button, List, ListTitle, Item, Message } from "./styles"

export const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState({ types: "" })
    const [list, setList] = useState()
    const [buttonActive, setButtonActive] = useState()

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
        setButtonActive("moves")
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
        setButtonActive("abilities")
    }

    return (
        <Container pokemon={pokemon}>
            {
                pokemon.types !== "" ?
                    <>
                        <Link to="/"> X </Link>

                        <Card pokemon={pokemon}>
                            <Image src={pokemon.image} alt={`Imagem do ${pokemon.name}`} />

                            <Description>
                                <Title pokemon={pokemon}>{pokemon.name}</Title>

                                <Type pokemon={pokemon}>
                                    {
                                        pokemon.types.map((type, index) => {
                                            return (
                                                <h2 key={index}>{type}</h2>
                                            )
                                        })
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

                        <List>
                            {
                                list !== undefined ?
                                    <>
                                        <ListTitle> 
                                            <p>{ list.title }</p> 
                                        </ListTitle>
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
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { getPokemons } from "../../../services/poke-api"

import { Container, Image, Description, H2, ContainerButtons, Button, List } from "./styles"

export const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState({ types: "" })
    const [moves, setMoves] = useState()

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

    useEffect(() => {
        async function fetchData() {
            const pokemonData = await getPokemons(pokeDetailsUrl)
            const movesNameList = pokemonData.moves.map(item => item.move.name)
            const pokeMovesUrl = moveName => `https://pokeapi.co/api/v2/move/${moveName}`
            let movesList = []

            movesNameList.forEach(move => {

                const getMoveDetails = async () => {
                    const movesData = await getPokemons(pokeMovesUrl(move))

                    movesList = [
                        ...movesList,
                        {
                            name: movesData.name,
                            description: movesData.flavor_text_entries[2].flavor_text,
                            type: movesData.type.name
                        }
                    ]

                    setMoves({
                        moves: movesList
                    })
                }
                getMoveDetails()
            })
        }
        fetchData()
    }, [pokeDetailsUrl])

    return (
        <Container pokemon={pokemon}>
            <Link to="/"> X </Link>
            <Image></Image>
            <Description>
                <H2></H2>
                <H2></H2>
            </Description>
            <ContainerButtons>
                <Button></Button>
                <Button></Button>
            </ContainerButtons>
            <List></List>
        </Container>
    )
}
export async function getPokemons(url) {
    const response = await fetch(url)
    return await response.json()
}
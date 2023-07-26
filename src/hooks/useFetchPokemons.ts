import { Pokemon } from '@/components/CardPokemon/types'
import { useEffect, useState, useCallback } from 'react'

export const useFetchPokemons = (type: string) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchPokemons = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
      const data = await response.json()

      const pokemonURLs = data.pokemon.map(
        (pokemon: { pokemon: { url: string } }) => pokemon.pokemon.url,
      )

      const pokemonData = await Promise.all(
        pokemonURLs.slice(0, 9).map(async (url: string) => {
          const pokemonResponse = await fetch(url)
          return pokemonResponse.json()
        }),
      )

      setPokemons(pokemonData)
    } catch (error) {
      console.error(`Error fetching ${type} Pokémon:`, error)
    } finally {
      setIsLoading(false)
    }
  }, [type])

  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons, type])

  return { pokemons, fetchPokemons, isLoading }
}

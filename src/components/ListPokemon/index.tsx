import { PokemonCard } from '../CardPokemon'
import { FirePokemon } from './types'
import styles from './listPokemon.module.scss'

const ListPokemon = ({ pokemons }: FirePokemon) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {pokemons.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListPokemon

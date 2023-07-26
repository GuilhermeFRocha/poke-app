import { useState } from 'react'
import Image from 'next/image'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useTheme } from '@/contexts/ThemeContext'
import Modal from '../Modal'
import { CardPokemon } from './types'
import IconHeight from '@/../public/assets/icon-height.svg'
import IconHeightLight from '@/../public/assets/icon-height-light.svg'
import IconWeight from '@/../public/assets/icon-weight.svg'
import IconWeightLight from '@/../public/assets/icon-weight-light.svg'
import { formatPokemonId } from '@/utils/formatPokemonId'
import { getTypeIconPath } from '@/utils/getTypeIconPath'
import styles from './cardPokemon.module.scss'

export const PokemonCard = (props: CardPokemon) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [skeleton, setSkeleton] = useState(true)
  const { theme } = useTheme()

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`

  const typePokemon = props.pokemon.types.map(({ type }) => {
    return type.name
  })

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const IconHeightTheme = theme === 'dark' ? IconHeight : IconHeightLight
  const IconWeighTheme = theme === 'dark' ? IconWeight : IconWeightLight

  return (
    <div className={`${styles.container} ${styles[typePokemon[0]]}`}>
      {skeleton && <div className={styles.skeletonLoading} />}
      <Image
        src={imgUrl}
        alt={props.pokemon.name}
        className={styles.pokemonImg}
        onLoad={() => setSkeleton(false)}
        width="240"
        height="240"
      />

      <div className={styles.pokemonDetails}>
        <span className={styles.pokemonNumber}>
          {formatPokemonId(props.pokemon.id)}
        </span>
        <span className={styles.pokemonName}>{props.pokemon.name}</span>
        <div className={styles.pokemonType}>
          {props.pokemon.types.map(({ type }) => (
            <div
              key={type.name}
              className={`${styles.pokemonType} ${styles[type.name]}`}
            >
              <img
                src={`/assets/pokemonTypes${getTypeIconPath(type.name)}`}
                alt={type.name}
                className={styles.typeIcon}
              />
              {type.name}
            </div>
          ))}
        </div>
        <div className={styles.pokemonFeatures}>
          <div className={styles.pokemonWeight}>
            <div>
              <Image src={IconWeighTheme} alt="Weight" width={24} />
              <span>{props.pokemon.weight / 10} kg</span>
            </div>
            <span>Weight</span>
          </div>
          <div className={styles.pokemonHeight}>
            <div>
              <Image src={IconHeightTheme} alt="Height" width={24} />
              <span>{props.pokemon.height / 10} m</span>
            </div>
            <span>Height</span>
          </div>
        </div>
        <button
          className={`${styles.moreDetailsButton} ${styles[typePokemon[0]]}`}
          onClick={handleModalOpen}
        >
          More Details
          <AiOutlineInfoCircle size={22} />
        </button>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleModalClose} props={props} />
      )}
    </div>
  )
}

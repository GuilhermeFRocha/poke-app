/* eslint-disable camelcase */
import React from 'react'
import Image from 'next/image'
import { formatPokemonId } from '@/utils/formatPokemonId'
import { getTypeIconPath } from '@/utils/getTypeIconPath'
import { ModalProps } from './types'
import Pokeball from '@/../public/assets/divider-pokeball.svg'
import IconHeight from '@/../public/assets/icon-height.svg'
import IconWeight from '@/../public/assets/icon-weight.svg'
import styles from './modal.module.scss'

interface CustomStyleProps extends React.CSSProperties {
  '--base-stat': string
}

const Modal = ({ isOpen, onClose, props }: ModalProps) => {
  if (!isOpen) return null

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`

  const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  const formatStatName = (statName: string) => {
    switch (statName) {
      case 'hp':
        return 'HP'
      case 'attack':
        return 'Attack'
      case 'defense':
        return 'Defense'
      case 'special-attack':
        return 'Sp. Atk'
      case 'special-defense':
        return 'Sp. Def'
      case 'speed':
        return 'Speed'
    }
  }

  return (
    <div className={styles.wrapper} onClick={handleWrapperClick}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeModal}>
          X
        </button>
        <div className={styles.pokemonData}>
          <div className={styles.pokemonImg}>
            <img
              src={imgUrl}
              alt={props.pokemon.name}
              className={styles.pokemonImg}
            />
          </div>
          <span className={styles.pokemonNumber}>
            {formatPokemonId(props.pokemon.id)}
          </span>
          <span className={styles.pokemonName}>{props.pokemon.name}</span>
          <div className={styles.pokemonType}>
            {props.pokemon.types.map(({ type }) => (
              <div
                className={`${styles.pokemonType} ${styles[type.name]}`}
                key={type.name}
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
                <Image src={IconWeight} alt="Weight" width={24} />
                <span>{props.pokemon.weight / 10} kg</span>
              </div>
              <span>Weight</span>
            </div>
            <div className={styles.pokemonHeight}>
              <div>
                <Image src={IconHeight} alt="Height" width={24} />
                <span>{props.pokemon.height / 10} m</span>
              </div>
              <span>Height</span>
            </div>
          </div>
        </div>

        <div className={styles.divider}>
          <Image src={Pokeball} alt="logo" width={56} height={56} />
        </div>
        <div className={styles.pokemonStats}>
          <span className={styles.statsTitle}>Stats</span>
          <ul className={styles.statsList}>
            {props.pokemon.stats.map(({ stat, base_stat }) =>
              React.Children.toArray(
                <li>
                  <span>{formatStatName(stat.name)}</span>
                  <span>{base_stat}</span>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressBarFill}
                      style={
                        {
                          '--base-stat': `${base_stat}%`,
                        } as CustomStyleProps
                      }
                    ></div>
                  </div>
                </li>,
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Modal

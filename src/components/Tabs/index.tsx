import { useState } from 'react'
import Image from 'next/image'
import ListPokemon from '@/components/ListPokemon'
import { useFetchPokemons } from '@/hooks/useFetchPokemons'
import Pokeball from '@/../public/assets/pokeball.svg'
import styles from './tabs.module.scss'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber)
  }

  const getTypeFromTab = (tabNumber: number) => {
    if (tabNumber === 1) return 'fire'
    if (tabNumber === 2) return 'water'
    if (tabNumber === 3) return 'electric'
    return ''
  }

  const getColorFromTab = (tabNumber: number) => {
    if (tabNumber === 1) return '#f88d41'
    if (tabNumber === 2) return '#14A8FF'
    if (tabNumber === 3) return '#ABA502'
    return ''
  }

  const { pokemons, fetchPokemons, isLoading } = useFetchPokemons(
    getTypeFromTab(activeTab),
  )

  return (
    <>
      <div className={styles.tabsContainer}>
        <div
          className={`${styles.tab} ${
            activeTab === 1 ? styles.active : styles.disabled
          }`}
          style={
            activeTab === 1
              ? {
                  backgroundColor: getColorFromTab(1),
                }
              : {}
          }
          onClick={() => {
            handleTabClick(1)
            fetchPokemons()
          }}
        >
          <Image
            src={`/assets/pokemonTypes/fire.svg`}
            alt="fire"
            className={styles.typeIcon}
            width={16}
            height={16}
          />
        </div>
        <div className={styles.divider}></div>
        <div
          className={`${styles.tab} ${
            activeTab === 2 ? styles.active : styles.disabled
          }`}
          style={
            activeTab === 2
              ? {
                  backgroundColor: getColorFromTab(2),
                }
              : {}
          }
          onClick={() => {
            handleTabClick(2)
            fetchPokemons()
          }}
        >
          <Image
            src={`/assets/pokemonTypes/water.svg`}
            alt="Watter"
            className={styles.typeIcon}
            width={16}
            height={16}
          />
        </div>
        <div className={styles.divider}></div>

        <div
          className={`${styles.tab} ${
            activeTab === 3 ? styles.active : styles.disabled
          }`}
          style={
            activeTab === 3
              ? {
                  backgroundColor: getColorFromTab(3),
                }
              : {}
          }
          onClick={() => {
            handleTabClick(3)
            fetchPokemons()
          }}
        >
          <Image
            src={`/assets/pokemonTypes/electric.svg`}
            alt="Electric"
            className={styles.typeIcon}
            width={16}
            height={16}
          />
        </div>
      </div>

      <div className={styles.tabContent}>
        {activeTab && !isLoading ? (
          <ListPokemon pokemons={pokemons} />
        ) : (
          <div className={styles.loadingContainer}>
            <div className={styles.pokeball}>
              <Image src={Pokeball} alt="loading" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Tabs

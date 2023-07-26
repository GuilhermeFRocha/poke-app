import { CardPokemon } from '../CardPokemon/types'

export interface ModalProps {
  onClose: () => void
  isOpen: boolean
  props: CardPokemon
}

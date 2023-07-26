// Função que retorna o caminho do ícone do tipo de Pokémon com base no nome do tipo
export const getTypeIconPath = (typeName: string) => {
  switch (typeName) {
    case 'fire':
      return '/fire.svg'
    case 'fighting':
      return '/fighting.svg'
    case 'flying':
      return '/flying.svg'
    case 'water':
      return '/water.svg'
    case 'poison':
      return '/poison.svg'
    case 'electric':
      return '/electric.svg'
    case 'steel':
      return '/steel.svg'
    default:
      return '/unknown.svg'
  }
}

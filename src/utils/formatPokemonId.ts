// Função que formata o identificador de um Pokémon
export const formatPokemonId = (id: number) => {
  if (id < 10) {
    // Se o id for menor que 10, adicionamos dois zeros à esquerda e retornamos no formato #00{id}
    return `#00${id}`
  } else if (id >= 10 && id < 100) {
    // Se o id estiver entre 10 e 99, adicionamos um zero à esquerda e retornamos no formato #0{id}
    return `#0${id}`
  } else {
    // Caso contrário, retornamos o id normalmente no formato #{id}
    return `#${id}`
  }
}

export const parseToBrl = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: Food[]) => {
  return items.reduce((acumulator, currentItem) => {
    return (acumulator += currentItem.preco)
  }, 0)
}

import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

export interface Food {
  foto: string
  preco: number
  id: number
  nome: string
  descricaoPrato: string
  porcao: string
}

export type RestaurantProfile = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Food[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestaurantProfile[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <ProductsList restaurants={restaurants} />
    </>
  )
}

export default Home

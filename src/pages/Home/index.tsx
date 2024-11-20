import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import { useGetRestaurantesQuery } from '../../services/api'

export interface Food {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
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
  const { data: perfilDoRestaurante } = useGetRestaurantesQuery()

  if (!perfilDoRestaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <ProductsList restaurants={perfilDoRestaurante} />
    </>
  )
}

export default Home

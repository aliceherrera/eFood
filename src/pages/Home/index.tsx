import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import { useGetRestaurantesQuery } from '../../services/api'

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

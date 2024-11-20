import { useParams } from 'react-router-dom'

import RestaurantBanner from '../../components/RestaurantBanner'
import RestaurantHeader from '../../components/RestaurantHeader'
import Item from '../../components/Item'
import { useGetPratosQuery } from '../../services/api'

const Restaurant = () => {
  const { id } = useParams()

  const { data: pratos } = useGetPratosQuery(id!)

  if (!pratos) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <RestaurantHeader />
      <RestaurantBanner
        capa={pratos.capa}
        tipo={pratos.tipo}
        titulo={pratos.titulo}
      />
      <Item itens={pratos.cardapio} key={id} />
    </>
  )
}

export default Restaurant

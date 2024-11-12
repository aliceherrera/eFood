import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { RestaurantProfile } from '../Home'
import RestaurantBanner from '../../components/RestaurantBanner'
import RestaurantHeader from '../../components/RestaurantHeader'
import Item from '../../components/Item'

const Restaurant = () => {
  const { id } = useParams()

  const [pratos, setPratos] = useState<RestaurantProfile>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [id])

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

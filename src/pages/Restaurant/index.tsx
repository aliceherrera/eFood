import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Food } from '../Home'
import RestaurantBanner from '../../components/RestaurantBanner'
import RestaurantHeader from '../../components/RestaurantHeader'
import Item from '../../components/Item'

const Restaurant = () => {
  const { id } = useParams()

  const [pratos, setPratos] = useState<Food[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [id])

  return (
    <>
      <RestaurantHeader />
      <RestaurantBanner />
      <Item itens={pratos} />
    </>
  )
}

export default Restaurant

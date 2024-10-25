import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItensList from '../../components/ItensList'
import RestaurantBanner from '../../components/RestaurantBanner'
import RestaurantHeader from '../../components/RestaurantHeader'
import { Food } from '../Home'

const Restaurant = () => {
  const { id } = useParams()

  const [pratos, setPratos] = useState<Food>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [id])

  return (
    <>
      <RestaurantHeader />
      <RestaurantBanner />
      <ItensList prato={pratos} />
    </>
  )
}

export default Restaurant

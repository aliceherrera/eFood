import ItensList from '../../components/ItensList'
import RestaurantBanner from '../../components/RestaurantBanner'
import RestaurantHeader from '../../components/RestaurantHeader'
import { Food } from '../Home'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Restaurant = () => {
  const { id } = useParams()

  const [prato, setPrato] = useState<Food>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPrato(res))
  }, [id])

  return (
    <>
      <RestaurantHeader />
      <RestaurantBanner />
      <ItensList prato={} />
    </>
  )
}

export default Restaurant

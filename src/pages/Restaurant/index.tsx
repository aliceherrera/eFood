import RestaurantBanner from '../../components/RestaurantBanner'
import RestaurantHeader from '../../components/RestaurantHeader'
import { Food } from '../Home'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Item from '../../components/Item'
import pizza from '../../assets/images/pizza.png'

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
      <Item
        description="A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião."
        image={pizza}
        name="pizza teste"
        portion="Serve 2 a 3 pessoas"
        key={pizza}
      />
    </>
  )
}

export default Restaurant

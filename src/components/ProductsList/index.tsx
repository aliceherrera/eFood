import Product from '../Product'
import { List } from './styles'

export type Props = {
  restaurants: RestaurantProfile[]
}

const ProductsList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: RestaurantProfile) => {
    const tags = []

    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    return tags
  }

  return (
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Product
            key={restaurant.id}
            id={restaurant.id}
            image={restaurant.capa}
            title={restaurant.titulo}
            rating={restaurant.avaliacao}
            description={restaurant.descricao}
            infos={getRestaurantTags(restaurant)}
          />
        ))}
      </List>
    </div>
  )
}

export default ProductsList

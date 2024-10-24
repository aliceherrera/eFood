import { Restaurant } from '../../pages/Home'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const ProductsList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
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

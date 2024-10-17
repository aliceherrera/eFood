import Restaurant from '../../models/restaurant'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const ProductsList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Product
          key={restaurant.id}
          image={restaurant.image}
          title={restaurant.title}
          rating={restaurant.rating}
          description={restaurant.description}
          info={restaurant.info}
        />
      ))}
    </List>
  </div>
)

export default ProductsList

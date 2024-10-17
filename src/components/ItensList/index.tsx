import Food from '../../models/food'
import Item from '../Item'
import { List } from './styles'

export type Props = {
  prato: Food[]
}

const ItensList = ({ prato }: Props) => (
  <List className="container">
    {prato.map((food) => (
      <Item
        key={food.id}
        image={food.image}
        title={food.title}
        description={food.description}
      />
    ))}
  </List>
)

export default ItensList

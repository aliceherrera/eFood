import { Cuisine, Restaurant, Image, Banner } from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const RestaurantBanner = ({ capa, tipo, titulo }: Props) => {
  return (
    <Image style={{ backgroundImage: `url(${capa})` }}>
      <Banner>
        <div className="container">
          <Cuisine>{tipo}</Cuisine>
          <Restaurant>{titulo}</Restaurant>
        </div>
      </Banner>
    </Image>
  )
}

export default RestaurantBanner

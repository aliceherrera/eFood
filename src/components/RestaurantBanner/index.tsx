import fundo from '../../assets/images/fundoPasta.png'
import { Cuisine, Restaurant, Image, Banner } from './styles'

const RestaurantBanner = () => (
  <Image style={{ backgroundImage: `url(${fundo})` }}>
    <Banner>
      <div className="container">
        <Cuisine>Italiana</Cuisine>
        <Restaurant>La Dolce Vita Trattoria</Restaurant>
      </div>
    </Banner>
  </Image>
)

export default RestaurantBanner

import logo from '../../assets/images/logo.png'
import * as S from './styles'
import fundo from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'

const RestaurantHeader = () => (
  <div style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <S.TitleContainer>
        <h3>Restaurantes</h3>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <h3>0 produto(s) no carrinho</h3>
      </S.TitleContainer>
    </div>
  </div>
)

export default RestaurantHeader

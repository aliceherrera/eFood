import logo from '../../assets/images/logo.png'
import * as S from './styles'
import fundo from '../../assets/images/fundo.png'

const RestaurantHeader = () => (
  <div style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <S.TitleContainer>
        <h3>Restaurantes</h3>
        <img src={logo} alt="efood" />
        <h3>0 produto(s) no carrinho</h3>
      </S.TitleContainer>
    </div>
  </div>
)

export default RestaurantHeader

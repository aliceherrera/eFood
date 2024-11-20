import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import * as S from './styles'
import fundo from '../../assets/images/fundo.png'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const RestaurantHeader = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <div style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <S.TitleContainer>
          <h3>Restaurantes</h3>
          <Link to="/">
            <img src={logo} alt="efood" />
          </Link>
          <S.ButtonCart onClick={openCart}>
            {itens.length} produto(s) no carrinho
          </S.ButtonCart>
        </S.TitleContainer>
      </div>
    </div>
  )
}

export default RestaurantHeader

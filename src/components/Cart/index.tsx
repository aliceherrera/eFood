import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Button from '../Button'
import * as S from './styles'

import { close, remove } from '../../store/reducers/cart'
import { open } from '../../store/reducers/checkout'
import { parseToBrl } from '../../utils'
import { getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const openChechout = () => {
    dispatch(open())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {itens.length > 0 ? (
          <>
            <ul>
              {itens.map((itens) => (
                <S.CartItem key={itens.id}>
                  <img src={itens.foto} alt={itens.nome} />
                  <div>
                    <h3>{itens.nome}</h3>
                    <p>{parseToBrl(itens.preco)}</p>
                    <button
                      onClick={() => removeItem(itens.id)}
                      type="button"
                    />
                  </div>
                </S.CartItem>
              ))}
            </ul>
            <S.Price>
              Valor Total <span>{parseToBrl(getTotalPrice(itens))}</span>
            </S.Price>
            <Button
              onClick={openChechout}
              title="Clique aqui para continuar com a compra"
              type="button"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <S.Empty>
            O carrinho está vazio, adicione pelo menos um item para continuar.
          </S.Empty>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Button from '../Button'
import * as S from './styles'

import { close, remove } from '../../store/reducers/cart'
import { open } from '../../store/reducers/checkout'
import { formataPreco } from '../Item'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
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
        <ul>
          {itens.map((itens) => (
            <S.CartItem key={itens.id}>
              <img src={itens.foto} alt={itens.nome} />
              <div>
                <h3>{itens.nome}</h3>
                <p>{formataPreco(itens.preco)}</p>
                <button onClick={() => removeItem(itens.id)} type="button" />
              </div>
            </S.CartItem>
          ))}
        </ul>
        <S.Price>
          Valor Total <span>{formataPreco(getTotalPrice())}</span>
        </S.Price>
        <Button
          onClick={openChechout}
          title="Clique aqui para continuar com a compra"
          type="button"
        >
          Continuar com a entrega
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

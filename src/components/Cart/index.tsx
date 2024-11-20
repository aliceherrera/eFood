import Button from '../Button'
import * as S from './styles'
import pizza from '../../assets/images/pizza.png'

const Cart = () => (
  <S.CartContainer>
    <S.Overlay />
    <S.Sidebar>
      <ul>
        <S.CartItem>
          <img src={pizza} alt="pizza" />
          <div>
            <h3>Nome da comida</h3>
            <p>R$ 60,90</p>
            <button type="button" />
          </div>
        </S.CartItem>
        <S.CartItem>
          <img src={pizza} alt="pizza" />
          <div>
            <h3>Nome da comida</h3>
            <p>R$ 60,90</p>
            <button type="button" />
          </div>
        </S.CartItem>
        <S.CartItem>
          <img src={pizza} alt="pizza" />
          <div>
            <h3>Nome da comida</h3>
            <p>R$ 60,90</p>
            <button type="button" />
          </div>
        </S.CartItem>
      </ul>
      <S.Price>
        Valor Total <span>R$ 70,00</span>
      </S.Price>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a entrega
      </Button>
    </S.Sidebar>
  </S.CartContainer>
)

export default Cart

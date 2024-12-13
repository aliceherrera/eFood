import Button from '../Button'
import * as S from './styles'

const Delivery = () => (
  <S.CartContainer className="">
    <S.Sidebar>
      <h2>Entrega</h2>
      <form>
        <S.InputContainer>
          <label htmlFor="name">Quem irá receber</label>
          <input type="text" name="name" />

          <label htmlFor="address">Endereço</label>
          <input type="text" name="address" />

          <label htmlFor="city">Cidade</label>
          <input type="text" name="city" />
          <div className="display-block">
            <div>
              <label htmlFor="postCode">CEP</label>
              <input type="postCode" name="name" />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input type="text" name="number" />
            </div>
          </div>

          <label htmlFor="complement">Complemento (opicional)</label>
          <input type="text" name="complement" />
        </S.InputContainer>
      </form>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com o pagamento
      </Button>
      <Button title="Clique aqui para voltar para o carrinho" type="button">
        Voltar para o carrinho
      </Button>
    </S.Sidebar>
  </S.CartContainer>
)

export default Delivery

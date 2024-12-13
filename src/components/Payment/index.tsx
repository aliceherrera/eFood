import Button from '../Button'
import * as S from './styles'

const Payment = () => (
  <S.CartContainer className="">
    <S.Sidebar>
      <h2>Pagamento - Valor a pagar R$190,00</h2>
      <form>
        <S.InputContainer>
          <label htmlFor="cardName">Nome no cartão</label>
          <input type="text" name="cardName" />

          <div className="display-block">
            <S.InputGroup maxWidth="228px">
              <label htmlFor="cardNumber">Numero do cartão</label>
              <input type="postCode" name="cardNumber" />
            </S.InputGroup>
            <S.InputGroup maxWidth="87px">
              <label htmlFor="code">CVV</label>
              <input type="text" name="code" />
            </S.InputGroup>
          </div>
          <div className="display-block">
            <S.InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input type="postCode" name="expiresMonth" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input type="text" name="expiresYear" />
            </S.InputGroup>
          </div>
        </S.InputContainer>
      </form>
      <Button title="Clique aqui para ir para pagamento" type="button">
        Finalizar pagamento
      </Button>
      <Button title="Clique aqui para voltar para endereço" type="button">
        Voltar para a edição de endereço
      </Button>
    </S.Sidebar>
  </S.CartContainer>
)

export default Payment

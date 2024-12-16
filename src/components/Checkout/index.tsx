import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import Button from '../Button'
import Sidebar from '../Sidebar'
import * as S from './styles'

const Checkout = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      postCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      code: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Precisa conter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'Precisa conter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'Precisa conter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      postCode: Yup.number()
        .min(8, 'Precisa conter 8 numeros')
        .max(8, 'Precisa conter 8 numeros')
        .required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'Precisa conter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'Precisa conter 16 números')
        .max(16, 'Precisa conter 16 números')
        .required('O campo é obrigatório'),
      code: Yup.string()
        .min(3, 'Precisa conter 3 números')
        .max(3, 'Precisa conter 3 números')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'Precisa conter 2 números')
        .max(2, 'Precisa conter 2 números')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'Precisa conter 4 números')
        .max(4, 'Precisa conter 4 números')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(form)

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay />
      <S.Sidebar>
        <Sidebar title="Entrega">
          <>
            <form onSubmit={form.handleSubmit}>
              <S.InputContainer>
                <label htmlFor="name">Quem irá receber</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />

                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />

                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <div className="display-block">
                  <S.InputGroup>
                    <label htmlFor="postCode">CEP</label>
                    <input
                      type="text"
                      id="postCode"
                      name="postCode"
                      value={form.values.postCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      // mask="99999-999"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </S.InputGroup>
                </div>

                <label htmlFor="complement">Complemento (opicional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputContainer>
            </form>
            <Button
              onClick={form.handleSubmit}
              title="Clique aqui para continuar com a compra"
              type="button"
            >
              Continuar com o pagamento
            </Button>
            <Button
              title="Clique aqui para voltar para o carrinho"
              type="button"
            >
              Voltar para o carrinho
            </Button>
          </>
        </Sidebar>
        <Sidebar title="Pagamento - Valor a pagar R$190,00">
          <>
            <form onSubmit={form.handleSubmit}>
              <S.InputContainer>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />

                <div className="display-block">
                  <S.InputGroup maxWidth="228px">
                    <label htmlFor="cardNumber">Numero do cartão</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="87px">
                    <label htmlFor="code">CVV</label>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      value={form.values.code}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </S.InputGroup>
                </div>
                <div className="display-block">
                  <S.InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </S.InputGroup>
                </div>
              </S.InputContainer>
            </form>
            <Button
              onClick={form.handleSubmit}
              title="Clique aqui para ir para pagamento"
              type="button"
            >
              Finalizar pagamento
            </Button>
            <Button title="Clique aqui para voltar para endereço" type="button">
              Voltar para a edição de endereço
            </Button>
          </>
        </Sidebar>
        <Sidebar title="Pedido realizado - NUMERO DO PEDIDO">
          <>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>

            <Button title="Clique aqui para encerrar" type="button">
              Concluir
            </Button>
          </>
        </Sidebar>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Checkout

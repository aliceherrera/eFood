import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

import { RootReducer } from '../../store'
import Button from '../Button'
import Sidebar from '../Sidebar'
import * as S from './styles'
import { usePurchaseMutation } from '../../services/api'
import { close } from '../../store/reducers/checkout'
import { getTotalPrice, parseToBrl } from '../../utils'

const Checkout = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const [paymentSection, setPaymentSection] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const closeCheckout = () => {
    dispatch(close())
  }

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      postCode: '',
      number: 0,
      complement: '',
      cardName: '',
      cardNumber: '',
      code: 0,
      expiresMonth: 0,
      expiresYear: 0
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
      postCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string().when((values, schema) =>
        paymentSection ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        paymentSection ? schema.required('O campo é obrigatório') : schema
      ),
      code: Yup.number().when((values, schema) =>
        paymentSection ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.number().when((values, schema) =>
        paymentSection ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.number().when((values, schema) =>
        paymentSection ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.postCode,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.code,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        },
        products: itens.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  console.log(form)

  const checkInputHasError = (fiedName: string) => {
    const isTouched = fiedName in form.touched
    const isInvalid = fiedName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay />
      <S.Sidebar>
        {isSuccess && data ? (
          <Sidebar title={`Pedido realizado - ${data.orderId}`}>
            <>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>

              <Button
                onClick={closeCheckout}
                title="Clique aqui para encerrar"
                type="submit"
              >
                Concluir
              </Button>
            </>
          </Sidebar>
        ) : (
          <>
            {paymentSection ? (
              <Sidebar
                title={`Pagamento - Valor a pagar ${parseToBrl(
                  getTotalPrice(itens)
                )}`}
              >
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
                        className={
                          checkInputHasError('cardName') ? 'error' : ''
                        }
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
                            className={
                              checkInputHasError('cardNumber') ? 'error' : ''
                            }
                          />
                        </S.InputGroup>
                        <S.InputGroup maxWidth="87px">
                          <label htmlFor="code">CVV</label>
                          <input
                            type="number"
                            id="code"
                            name="code"
                            value={form.values.code}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('code') ? 'error' : ''
                            }
                          />
                        </S.InputGroup>
                      </div>
                      <div className="display-block">
                        <S.InputGroup>
                          <label htmlFor="expiresMonth">
                            Mês de vencimento
                          </label>
                          <input
                            type="number"
                            id="expiresMonth"
                            name="expiresMonth"
                            value={form.values.expiresMonth}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('expiresMonth') ? 'error' : ''
                            }
                          />
                        </S.InputGroup>
                        <S.InputGroup>
                          <label htmlFor="expiresYear">Ano de vencimento</label>
                          <input
                            type="number"
                            id="expiresYear"
                            name="expiresYear"
                            value={form.values.expiresYear}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('expiresYear') ? 'error' : ''
                            }
                          />
                        </S.InputGroup>
                      </div>
                    </S.InputContainer>
                  </form>
                  <Button
                    onClick={form.handleSubmit}
                    title="Clique aqui para finalizar pagamento"
                    type="button"
                  >
                    Finalizar pagamento
                  </Button>
                  <Button
                    onClick={() => setPaymentSection(false)}
                    title="Clique aqui para voltar para endereço"
                    type="button"
                  >
                    Voltar para a edição de endereço
                  </Button>
                </>
              </Sidebar>
            ) : (
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
                        className={checkInputHasError('name') ? 'error' : ''}
                      />

                      <label htmlFor="address">Endereço</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={form.values.address}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('address') ? 'error' : ''}
                      />

                      <label htmlFor="city">Cidade</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
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
                            className={
                              checkInputHasError('postCode') ? 'error' : ''
                            }
                          />
                        </S.InputGroup>
                        <S.InputGroup>
                          <label htmlFor="number">Número</label>
                          <input
                            type="number"
                            id="number"
                            name="number"
                            value={form.values.number}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('number') ? 'error' : ''
                            }
                          />
                        </S.InputGroup>
                      </div>

                      <label htmlFor="complement">
                        Complemento (opicional)
                      </label>
                      <input
                        type="text"
                        id="complement"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('complement') ? 'error' : ''
                        }
                      />
                    </S.InputContainer>
                  </form>
                  <Button
                    onClick={() => {
                      if (
                        form.isValid &&
                        form.values.name &&
                        form.values.address &&
                        form.values.city &&
                        form.values.postCode &&
                        form.values.number
                      ) {
                        setPaymentSection(true)
                      } else {
                        form.setTouched({
                          name: true,
                          address: true,
                          city: true,
                          postCode: true,
                          number: true
                        })
                      }
                    }}
                    title="Clique aqui para continuar com a compra"
                    type="button"
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    onClick={closeCheckout}
                    title="Clique aqui para voltar para o carrinho"
                    type="button"
                  >
                    Voltar para o carrinho
                  </Button>
                </>
              </Sidebar>
            )}
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Checkout

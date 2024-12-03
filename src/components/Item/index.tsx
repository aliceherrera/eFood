import { useState } from 'react'
import Button from '../Button'
import * as S from './styles'
import close from '../../assets/images/close 1.png'
import { Food } from '../../pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  itens: Food[]
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Item = ({ itens }: Props) => {
  const [modal, setModal] = useState<Food & { isVisible: boolean }>({
    isVisible: false,
    foto: '',
    descricao: '',
    id: 0,
    nome: '',
    porcao: '',
    preco: 0
  })

  const dispatch = useDispatch()

  const addToCart = (comida: Food) => {
    dispatch(add(comida))
    dispatch(open())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 157) + '...'
    }
    return descricao
  }

  return (
    <S.List className="container">
      {itens.map((comida) => (
        <ul key={comida.id}>
          <S.Card>
            <S.Container>
              <S.Image src={comida.foto} alt={comida.nome} />
              <S.Title>{comida.nome}</S.Title>
              <S.Description>{getDescricao(comida.descricao)}</S.Description>
              <Button
                type="link"
                title="Saiba mais"
                onClick={() => {
                  setModal({
                    foto: comida.foto,
                    descricao: comida.descricao,
                    id: comida.id,
                    nome: comida.nome,
                    porcao: comida.porcao,
                    preco: comida.preco,
                    isVisible: true
                  })
                }}
              >
                Mais detalhes
              </Button>
            </S.Container>
          </S.Card>

          {modal.isVisible && modal.id === comida.id && (
            <S.ContainerModal className="visivel">
              <S.Modal>
                <S.ModalContent>
                  <img src={modal.foto} alt={modal.nome} />
                  <S.Infos>
                    <h2>{modal.nome}</h2>
                    <p>{modal.descricao}</p>
                    <p>{modal.porcao}</p>
                    <Button
                      onClick={() => {
                        addToCart(comida)
                        setModal({
                          ...modal,
                          isVisible: false
                        })
                      }}
                      type="button"
                      title="Adicionar ao carrinho"
                    >
                      Adicionar ao carrinho - {formataPreco(modal.preco)}
                    </Button>
                    <S.Close
                      src={close}
                      alt="fechar"
                      onClick={() =>
                        setModal({
                          ...modal,
                          isVisible: false
                        })
                      }
                    />
                  </S.Infos>
                </S.ModalContent>
              </S.Modal>
            </S.ContainerModal>
          )}
        </ul>
      ))}
    </S.List>
  )
}

export default Item

import { useState } from 'react'
import Button from '../Button'
import * as S from './styles'
import close from '../../assets/images/close 1.png'
import { Food } from '../../pages/Home'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

type Props = {
  itens: Food[]
}

interface ModalState extends Food {
  isVisible: boolean
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Item = ({ itens }: Props) => {
  const [modal, setModal] = useState<ModalState>({
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
  }

  const [ModalImage, setModalImage] = useState('')
  const [ModalName, setModalName] = useState('')
  const [ModalDescription, setModalDescription] = useState('')
  const [ModalPortion, setModalPortion] = useState('')
  const [ModalPrice, setModalPrice] = useState(0)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 157) + '...'
    }
    return descricao
  }

  return (
    <S.List className="container">
      {itens.map((comida) => (
        <>
          <ul>
            <S.Card>
              <S.Container>
                <S.Image src={comida.foto} alt={comida.nome} />
                <S.Title>{comida.nome}</S.Title>

                <S.Description>{getDescricao(comida.descricao)}</S.Description>
                <Button
                  key={comida.id}
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
                    setModalImage(comida.foto)
                    setModalName(comida.nome)
                    setModalDescription(comida.descricao)
                    setModalPortion(comida.porcao)
                    setModalPrice(comida.preco)
                    addToCart(comida)
                  }}
                >
                  Mais detalhes
                </Button>
              </S.Container>
            </S.Card>
          </ul>
          <S.ContainerModal className={modal.isVisible ? 'visivel' : ''}>
            <S.Modal>
              <S.ModalContent>
                <img src={ModalImage} alt="pizza" />
                <S.Infos>
                  <h2>{ModalName}</h2>
                  <p>{ModalDescription}</p>
                  <p>{ModalPortion}</p>
                  <Button
                    onClick={() => {
                      addToCart(comida)
                    }}
                    type="button"
                    title="Adicionar ao carrinho"
                  >
                    Adicionar ao carrinho - {formataPreco(ModalPrice)}
                  </Button>
                  <S.Close
                    src={close}
                    alt="fechar"
                    onClick={() =>
                      setModal({
                        foto: '',
                        descricao: '',
                        id: 0,
                        nome: '',
                        porcao: '',
                        preco: 0,
                        isVisible: false
                      })
                    }
                  />
                </S.Infos>
              </S.ModalContent>
            </S.Modal>
          </S.ContainerModal>
        </>
      ))}
    </S.List>
  )
}

export default Item

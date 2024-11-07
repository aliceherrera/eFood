import { useState } from 'react'
import Button from '../Button'
import * as S from './styles'
import close from '../../assets/images/close 1.png'
import { Food } from '../../pages/Home'

type Props = {
  itens: Food[]
}

interface ModalState extends Food {
  isVisible: boolean
}

const Item = ({ itens }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    descricaoPrato: '',
    id: 0,
    nome: '',
    porcao: '',
    preco: 0
  })

  const [ModalImage, setModalImage] = useState('')
  const [ModalName, setModalName] = useState('')
  const [ModalDescription, setModalDescription] = useState('')
  const [ModalPortion, setModalPortion] = useState('')

  return (
    <>
      <S.List className="container">
        {itens.map((comida) => (
          <S.Card>
            <S.Container>
              <S.Image src={comida.foto} alt={comida.nome} />
              <S.Title>{comida.nome}</S.Title>

              <S.Description>{comida.descricaoPrato}</S.Description>
              <Button
                key={comida.id}
                type="link"
                title="Saiba mais"
                onClick={() => {
                  setModal({
                    foto: comida.foto,
                    descricaoPrato: comida.descricaoPrato,
                    id: comida.id,
                    nome: comida.nome,
                    porcao: comida.porcao,
                    preco: comida.preco,
                    isVisible: true
                  })
                  setModalImage(comida.foto)
                  setModalName(comida.nome)
                  setModalDescription(comida.descricaoPrato)
                  setModalPortion(comida.porcao)
                }}
              >
                Mais detalhes
              </Button>
            </S.Container>
          </S.Card>
        ))}
      </S.List>
      <S.ContainerModal className={modal.isVisible ? 'visivel' : ''}>
        <S.Modal>
          <S.ModalContent>
            <img src={ModalImage} alt="pizza" />
            <S.Infos>
              <h2>{ModalName}</h2>
              <p>{ModalDescription}</p>
              <p>{ModalPortion}</p>
              <Button type="button" title="Adicionar ao carrinho">
                Adicionar ao carrinho - R$ 60,90
              </Button>
              <S.Close
                src={close}
                alt="fechar"
                onClick={() =>
                  setModal({
                    foto: '',
                    descricaoPrato: '',
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
  )
}

export default Item

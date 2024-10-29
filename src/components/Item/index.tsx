import Button from '../Button'
import * as S from './styles'
import pizza from '../../assets/images/pizza.png'
import sushi from '../../assets/images/sushi.png'
import close from '../../assets/images/close 1.png'
import { useState } from 'react'

type Props = {
  image: string
  name: string
  description: string
  portion: string
}

type MenuItem = {
  image: string
  name: string
  description: string
  portion: string
}

const mock: MenuItem[] = [
  {
    name: 'teste 01',
    description: 'testando 123 ihul',
    image: pizza,
    portion: 'serve 2 pessoas'
  },
  {
    name: 'teste 02',
    description: 'testando 123 olé',
    image: sushi,
    portion: 'serve 2 pessoas'
  },
  {
    name: 'teste 03',
    description: 'testando 123 blabla',
    image: pizza,
    portion: 'serve 2 pessoas'
  },
  {
    name: 'teste 04',
    description: 'testando 123 show',
    image: pizza,
    portion: 'serve 2 pessoas'
  }
]

const Item = ({ image, name, description, portion }: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [ModalImage, setModalImage] = useState('')
  const [ModalName, setModalName] = useState('')
  const [ModalDescription, setModalDescription] = useState('')
  const [ModalPortion, setModalPortion] = useState('')

  return (
    <>
      <S.List className="container">
        {mock.map((prato) => (
          <S.Card key={prato.name}>
            <S.Container>
              <S.Image src={prato.image} alt={prato.name} />
              <S.Title>{prato.name}</S.Title>

              <S.Description>{prato.description}</S.Description>
              <Button
                type="link"
                title="Saiba mais"
                onClick={() => {
                  setModalIsVisible(true)
                  setModalImage(prato.image)
                  setModalName(prato.name)
                  setModalDescription(prato.description)
                  setModalPortion(prato.portion)
                }}
              >
                Mais detalhes
              </Button>
            </S.Container>
          </S.Card>
        ))}
      </S.List>
      <S.ContainerModal className={modalIsVisible ? 'visivel' : ''}>
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
                onClick={() => setModalIsVisible(false)}
              />
            </S.Infos>
          </S.ModalContent>
        </S.Modal>
      </S.ContainerModal>
    </>
  )
}

export default Item

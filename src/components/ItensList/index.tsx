import { Food } from '../../pages/Home'
import Item from '../Item'
import { Close, Container, Infos, List, Modal, ModalContent } from './styles'
import pizza from '../../assets/images/pizza.png'
import close from '../../assets/images/close 1.png'

import Button from '../Button'
import { useState } from 'react'

export type Props = {
  prato: Food[]
}

interface ModalState extends Food {
  isVisible: boolean
}

const ItensList = ({ prato }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    descricao: '',
    foto: '',
    id: 0,
    nome: '',
    porcao: '',
    preco: 0
  })

  return (
    <>
      <List className="container">
        {prato.map((food) => (
          <Item
            key={food.id}
            image={food.foto}
            title={food.nome}
            description={food.descricao}
          />
        ))}
      </List>
      <Container>
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent>
            <img src={pizza} alt="pizza" />
            <Infos>
              <h2>Pizza Marguerita</h2>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
                <br />
                <br />
                Serve: de 2 a 3 pessoas
              </p>
              <Button type="button" title="Adicionar ao carrinho">
                Adicionar ao carrinho - R$ 60,90
              </Button>
              <Close src={close} alt="fechar" />
            </Infos>
          </ModalContent>
        </Modal>
      </Container>
    </>
  )
}

export default ItensList

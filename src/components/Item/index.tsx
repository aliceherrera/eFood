import Button from '../Button'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Item = ({ image, title, description }: Props) => (
  <S.Card>
    <S.Container>
      <S.Image src={image} alt={title} />
      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>
      <Button type="button" title="Saiba mais">
        Adicionar ao carrinho
      </Button>
    </S.Container>
  </S.Card>
)

export default Item

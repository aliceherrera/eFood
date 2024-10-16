import { ButtonContainer } from './styles'

export type Props = {
  type: 'button'
  title: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, onClick, children }: Props) => (
  <ButtonContainer type="button" title={title} onClick={onClick}>
    {children}
  </ButtonContainer>
)
export default Button

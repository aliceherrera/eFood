import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'link' | 'button' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: any
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer type={type} title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink type="link" title={title} to={to as string} onClick={onClick}>
      {children}
    </ButtonLink>
  )
}

export default Button

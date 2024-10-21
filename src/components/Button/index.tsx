import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'link' | 'button'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink type="link" title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button

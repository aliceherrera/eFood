import { Props } from '../Button'
import { Secondary } from './styles'

const ButtonSecondary = ({ type, title, to, children }: Props) => {
  if (type === 'link') {
    return (
      <Secondary type="link" title={title} to={to as string}>
        {children}
      </Secondary>
    )
  }
  return null
}
export default ButtonSecondary

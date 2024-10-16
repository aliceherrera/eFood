import { Props } from '../Button'
import { Secondary } from './styles'

const ButtonSecondary = ({ type, title, onClick, children }: Props) => (
  <Secondary type="button" title={title} onClick={onClick}>
    {children}
  </Secondary>
)
export default ButtonSecondary

import type { ButtonProps } from './types'

import { ButtonContainer } from './styles'
import { Icon } from 'components/Icon'

export const Button = (props: ButtonProps) => {
  const { label, type, hide = false, icon, onClick, color = 'PRIMARY' } = props

  return (
    <ButtonContainer onClick={onClick} type={type} hide={hide} color={color}>
      {icon && <Icon name={icon} color='GRAY_0' size={18} />}
      {label}
    </ButtonContainer>
  )
}

import type { ButtonProps } from './types'

import { ButtonContainer } from './styles'

export const Button = (props: ButtonProps) => {
  const { label, type, hide = false, onClick } = props

  return (
    <ButtonContainer onClick={onClick} type={type} hide={hide}>
      {label}
    </ButtonContainer>
  )
}

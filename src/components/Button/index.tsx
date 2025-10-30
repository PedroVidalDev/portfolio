import type { ButtonProps } from './types'

import { ButtonContainer } from './styles'

export const Button = (props: ButtonProps) => {
  const { label, type, onClick } = props

  return (
    <ButtonContainer onClick={onClick} type={type}>
      {label}
    </ButtonContainer>
  )
}

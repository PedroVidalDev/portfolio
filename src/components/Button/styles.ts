import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  type: 'primary' | 'secondary'
  hide: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;

  width: fit-content !important;

  gap: 8px;
  padding: 12px 24px;

  border-radius: 8px;

  cursor: pointer;

  color: white;
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SMALL};
    font-family: ${theme.FONTS.PRIMARY};
    font-weight: ${theme.FONT_WEIGHT.MEDIUM};

    background-color: ${type === 'primary'
      ? theme.COLORS.PRIMARY
      : 'transparent'};

    border: 2px solid;
    border-color: ${type === 'primary' ? 'transparent' : theme.COLORS.PRIMARY};
  `};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }

  @media (max-width: 1333px) {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.XSMALL};
    `};
  }
`

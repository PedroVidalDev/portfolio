import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  type: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
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
`

import styled, { css } from 'styled-components'

export const Title = styled.h2`
  ${({ theme }) => css`
    width: 100%;

    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.XXXXLARGE};
    color: ${theme.COLORS.GRAY_0};
    font-weight: ${theme.FONT_WEIGHT.MEDIUM};
    text-align: justify;

    span {
      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.XXXXLARGE};
      color: ${theme.COLORS.PRIMARY};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};
    }
  `};

  @media (max-width: 1333px) {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.XXXLARGE};

      span {
        font-size: ${theme.FONT_SIZE.XXXLARGE};
      }
    `};
  }
`

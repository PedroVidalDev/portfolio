import styled, { css } from 'styled-components'

export const Title = styled.h2`
  ${({ theme }) => css`
    width: 100%;

    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.XXXXLARGE};
    color: ${theme.COLORS.GRAY_0};
    font-weight: ${theme.FONT_WEIGHT.MEDIUM};

    span {
      font-family: ${theme.FONTS.PRIMARY}!important;
      font-size: ${theme.FONT_SIZE.XXXXLARGE}!important;
      color: ${theme.COLORS.PRIMARY}!important;
      font-weight: ${theme.FONT_WEIGHT.MEDIUM}!important;
    }
  `};

  @media (max-width: 1333px) {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.XXXLARGE};

      span {
        font-size: ${theme.FONT_SIZE.XXXLARGE}!important;
      }
    `};
  }
`

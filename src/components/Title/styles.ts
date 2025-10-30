import styled, { css } from 'styled-components'

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.SECONDARY};
    font-size: ${theme.FONT_SIZE.XXXXLARGE};
    color: ${theme.COLORS.GRAY_0};
    font-weight: ${theme.FONT_WEIGHT.MEDIUM};

    span {
      font-family: ${theme.FONTS.SECONDARY}!important;
      font-size: ${theme.FONT_SIZE.XXXXLARGE}!important;
      color: ${theme.COLORS.PRIMARY}!important;
      font-weight: ${theme.FONT_WEIGHT.MEDIUM}!important;
    }
  `};
`

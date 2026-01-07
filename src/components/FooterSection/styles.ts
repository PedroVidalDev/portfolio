import styled, { css } from 'styled-components'

export const FooterSectionContainer = styled.footer`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARKER_PRIMARY};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 18px 0;

  p {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.SMALL};
      color: ${theme.COLORS.GRAY_400};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};
    `};
  }
`

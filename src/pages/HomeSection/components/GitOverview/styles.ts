import styled, { css } from 'styled-components'

export const GitOverviewContainer = styled.div`
  display: flex;

  width: 100%;

  justify-content: space-between;
`

export const GitOverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  strong {
    ${({ theme }) => css`
      width: 100%;

      text-align: center;

      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.XXXLARGE};
      color: ${theme.COLORS.LIGHTER_PRIMARY};
      font-weight: ${theme.FONT_WEIGHT.BOLD};

      @media (max-width: 1333px) {
        font-size: ${theme.FONT_SIZE.XXLARGE};
      }

      @media (max-width: 1000px) {
        font-size: ${theme.FONT_SIZE.XLARGE};
      }
    `};
  }

  span {
    ${({ theme }) => css`
      width: 100%;

      text-align: center;

      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.MEDIUM};
      color: ${theme.COLORS.GRAY_0};
      font-weight: ${theme.FONT_WEIGHT.BOLD};

      @media (max-width: 1333px) {
        font-size: ${theme.FONT_SIZE.XSMALL};
      }

      @media (max-width: 1000px) {
        font-size: ${theme.FONT_SIZE.XXSMALL};
      }
    `};
  }
`

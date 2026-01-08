import styled, { css } from 'styled-components'

export const HomeSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 64px 10%;
  gap: 24px;

  background-color: ${({ theme }) => theme.COLORS.DARKER_PRIMARY};

  @media (max-width: 1000px) {
    justify-content: center;
    flex-direction: column-reverse;
  }

  overflow: hidden;
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-right: 14%;

  gap: 16px;

  text-align: center;

  span {
    ${({ theme }) => css`
      width: 100%;

      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.SMALL};
      color: ${theme.COLORS.GRAY_700};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};
      text-align: justify;

      @media (max-width: 1333px) {
        font-size: ${theme.FONT_SIZE.XSMALL};
      }

      @media (max-width: 1000px) {
        text-align: center;
      }
    `};
  }

  p {
    ${({ theme }) => css`
      width: 100%;

      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.SMALL};
      color: ${theme.COLORS.GRAY_400};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};
      text-align: justify;

      @media (max-width: 1333px) {
        font-size: ${theme.FONT_SIZE.XSMALL};
      }

      @media (max-width: 1000px) {
        text-align: center;
      }
    `};
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding-right: 0;
    justify-content: center;
    align-items: center;

    h2 {
      text-align: center;
    }
  }
`

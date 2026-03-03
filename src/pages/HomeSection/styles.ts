import styled, { css } from 'styled-components'

export const HomeSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 80px 10%;
  gap: 24px;

  overflow-y: scroll;

  animation: fadeIn 0.5s ease-in-out;

  @media (max-width: 1084px) {
    justify-content: center;
    flex-direction: column;
  }
`

export const SubTitle = styled.span`
  ${({ theme }) => css`
    width: 100%;

    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.SMALL};
    color: ${theme.COLORS.GRAY_700};
    font-weight: ${theme.FONT_WEIGHT.MEDIUM};
    text-align: justify;

    @media (max-width: 1500px) {
      font-size: ${theme.FONT_SIZE.XSMALL};
    }

    @media (max-width: 1084px) {
      text-align: center;
    }
  `};
`

export const ApresentationText = styled.p`
  ${({ theme }) => css`
    width: 100%;

    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.SMALL};
    color: ${theme.COLORS.GRAY_400};
    font-weight: ${theme.FONT_WEIGHT.MEDIUM};
    text-align: justify;

    @media (max-width: 1500px) {
      font-size: ${theme.FONT_SIZE.XSMALL};
    }

    @media (max-width: 1084px) {
      text-align: center;
      max-width: 400px;
    }
  `};
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-right: 14%;

  gap: 16px;

  text-align: center;

  @media (max-width: 1084px) {
    width: 100%;
    padding-right: 0;
    justify-content: center;
    align-items: center;

    h2 {
      text-align: center;
    }
  }
`

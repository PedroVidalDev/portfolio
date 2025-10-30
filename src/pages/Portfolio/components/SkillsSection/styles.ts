import styled, { css } from 'styled-components'

export const SkillsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARKER_PRIMARY};

  width: 100%;

  padding: 64px 10%;
  gap: 24px;
`

export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 8px;

  @media (max-width: 727px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 420px) {
    grid-template-columns: auto;
  }
`

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  background-color: ${({ theme }) => theme.COLORS.DARK_PRIMARY};
  border-radius: 8px;

  padding: 12px 16px;
  gap: 8px;

  h2 {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.SECONDARY};
      font-size: ${theme.FONT_SIZE.LARGE};
      color: ${theme.COLORS.GRAY_0};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};

      @media (max-width: 1333px) {
        font-size: ${theme.FONT_SIZE.XSMALL};
      }
    `};
  }

  p {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.SMALL};
      color: ${theme.COLORS.GRAY_400};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};

      @media (max-width: 1333px) {
        font-size: ${theme.FONT_SIZE.XSMALL};
      }
    `};
  }
`

export const IconContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 8px;
`

import styled, { css } from 'styled-components'

import { Title } from 'components/Title/styles'

import BrazilFlag from 'assets/languages/brazil.png'
import USFlag from 'assets/languages/eua.png'

export const HeaderSectionContainer = styled.header`
  display: flex;

  width: 100%;

  height: 80px;

  padding: 0 10%;

  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_PRIMARY};
`

export const TitleHeader = styled(Title)`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE}!important;

  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE}!important;
  }
`

export const Options = styled.nav`
  display: flex;
  align-items: center;

  gap: 32px;
`

export const Option = styled.a`
  cursor: pointer;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.SECONDARY};
    font-size: ${theme.FONT_SIZE.MEDIUM};
    color: ${theme.COLORS.GRAY_0};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};

    @media (max-width: 1333px) {
      font-size: ${theme.FONT_SIZE.XSMALL};
    }
  `};

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`

export const LanguageSelector = styled.button<{ language: string }>`
  cursor: pointer;

  width: 32px;
  height: 18px;

  background-image: ${({ language }) =>
    language === 'en' ? `url(${USFlag})` : `url(${BrazilFlag})`};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 0;
`

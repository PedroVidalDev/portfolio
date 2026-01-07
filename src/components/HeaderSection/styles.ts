import styled, { css, keyframes } from 'styled-components'

import { Title } from 'components/Title/styles'

import BrazilFlag from 'assets/languages/brazil.png'
import USFlag from 'assets/languages/eua.png'

export const HeaderSectionContainer = styled.header`
  position: fixed;
  display: flex;

  top: 0;
  left: 0;

  z-index: 1000;

  width: 100%;
  height: 80px;

  padding: 0 10%;

  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  backdrop-filter: blur(10px);
`

export const TitleHeader = styled(Title)`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE}!important;

  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE}!important;
  }

  @media (max-width: 1333px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.XLARGE}!important;

    span {
      font-size: ${({ theme }) => theme.FONT_SIZE.XLARGE}!important;
    }
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(calc(-100% - 80px));
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(calc(-100% - 80px));
    opacity: 0;
  }
`

interface OptionsProps {
  expanded: boolean
}

export const Options = styled.nav<OptionsProps>`
  display: flex;

  align-items: center;

  gap: 32px;

  @media (max-width: 1000px) {
    position: fixed;

    flex-direction: column;

    justify-content: center;

    top: 80px;
    left: 0;

    width: 100%;
    padding: 32px 0;

    background-color: rgba(18, 18, 18, 0.9);
    backdrop-filter: blur(10px);

    z-index: 1000;

    animation: ${(props) => (props.expanded ? slideIn : slideOut)} 0.3s
      ease-in-out forwards;
    animation-fill-mode: forwards;
  }
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

    @media (max-width: 1000px) {
      font-size: ${theme.FONT_SIZE.SMALL};
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

export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    cursor: pointer;
  }
`

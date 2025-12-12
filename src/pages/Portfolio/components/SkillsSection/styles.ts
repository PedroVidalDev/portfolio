import styled, { css, keyframes } from 'styled-components'

export const SkillsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_PRIMARY};

  width: 100%;

  padding: 64px 0;
  gap: 24px;

  &::-webkit-scrollbar {
    display: none;
  }

  overflow: hidden;
`

const CarouselAnimation = keyframes`
  0% {
    transform: translate(0);
  }

  100% {
    transform: translate(-100%);
  }
`

export const SkillsContent = styled.div`
  display: flex;

  width: 100%;

  padding: 16px 0;

  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    overflow-x: auto;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }
`

interface SkillsWrapperProps {
  reverse?: boolean
  isPaused?: boolean
}

export const SkillsWrapper = styled.div<SkillsWrapperProps>`
  display: flex;

  align-items: center;
  justify-content: center;

  padding-right: 8px;

  &::-webkit-scrollbar {
    display: none;
  }

  gap: 8px;

  animation: ${CarouselAnimation} 20s linear infinite
    ${({ reverse }) => (reverse ? 'reverse' : 'normal')};

  animation-play-state: ${({ isPaused }) => (isPaused ? 'paused' : 'running')};
`

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  background-color: ${({ theme }) => theme.COLORS.DARKER_PRIMARY};
  border-radius: 8px;

  padding: 16px;
  min-width: 380px;
  height: 200px;
  gap: 8px;

  @media (max-width: 1333px) {
    height: 180px;
  }

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
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

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

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.75;
    transform: scale(1.02);
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

interface SkillsSubtitleProps {
  side: 'left' | 'right'
}

export const SkillsSubtitle = styled.h3<SkillsSubtitleProps>`
  padding: 0 10%;

  width: 100%;

  text-align: ${({ side }) => (side === 'left' ? 'left' : 'right')};

  ${({ theme }) => css`
    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.XXXLARGE};
    color: ${theme.COLORS.GRAY_0};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};

    span {
      font-family: ${theme.FONTS.SECONDARY}!important;
      font-size: ${theme.FONT_SIZE.XXXLARGE}!important;
      color: ${theme.COLORS.PRIMARY}!important;
      font-weight: ${theme.FONT_WEIGHT.MEDIUM}!important;
    }

    @media (max-width: 1333px) {
      ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XLARGE};

        span {
          font-size: ${theme.FONT_SIZE.XLARGE}!important;
        }
      `};
    }
  `};
`

import styled, { css } from 'styled-components'

export const HomeSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 95vh;

  padding: 64px 10%;
  gap: 24px;

  background-color: ${({ theme }) => theme.COLORS.DARKER_PRIMARY};

  @media (max-width: 925px) {
    justify-content: center;
  }
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  gap: 8px;

  span {
    ${({ theme }) => css`
      width: 100%;

      font-family: ${theme.FONTS.PRIMARY};
      font-size: ${theme.FONT_SIZE.SMALL};
      color: ${theme.COLORS.GRAY_700};
      font-weight: ${theme.FONT_WEIGHT.MEDIUM};

      @media (max-width: 1333px) {
        font-size: ${theme.FONT_SIZE.XSMALL};
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

      @media (max-width: 1333px) {
        font-size: ${theme.FONT_SIZE.XSMALL};
      }
    `};
  }

  @media (max-width: 925px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  width: 100%;
`

export const ImagesContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 24px;

  width: 50%;

  @media (max-width: 925px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  width: 500px;
  height: 500px;

  border-radius: 50%;
  object-fit: cover;

  border: 8px solid ${({ theme }) => theme.COLORS.PRIMARY};

  @media (max-width: 1333px) {
    width: 340px;
    height: 340px;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: space-between;

  gap: 24px;
`

export const Social = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 50%;

  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};

  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1333px) {
    width: 40px;
    height: 40px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`

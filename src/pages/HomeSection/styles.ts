import styled, { css, keyframes } from 'styled-components'

const animate = keyframes`
    0%
    {
        transform: rotate(90deg) translateX(0);
        opacity: 0;
    }
    70%
    {
        opacity: 1;
    }
    100%
    {
        transform: rotate(90deg) translateX(-1500px);
        opacity: 0;
    }
    
`

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

  width: 38%;

  gap: 16px;

  text-align: center;

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

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  width: 100%;

  justify-content: center;
`

interface ImageContainerProps {
  backgroundImage: string
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 580px;
  height: 100%;

  border-radius: 8px;

  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1333px) {
    height: 80%;
    width: 480px;
  }

  @media (max-width: 1000px) {
    height: 20%;
    width: 100%;
  }

  span:nth-child(1) {
    bottom: 0;
    left: 0;
    animation-delay: 0s;
    animation-duration: 1s;
  }

  span:nth-child(2) {
    bottom: 0;
    left: 10%;
    animation-delay: 0.2s;
    animation-duration: 1.2s;
  }

  span:nth-child(3) {
    bottom: 0;
    left: 20%;
    animation-delay: 0.4s;
    animation-duration: 1.4s;
  }

  span:nth-child(4) {
    bottom: 0;
    left: 30%;
    animation-delay: 0.6s;
    animation-duration: 1.6s;
  }

  span:nth-child(5) {
    bottom: 0;
    left: 40%;
    animation-delay: 0.8s;
    animation-duration: 1.8s;
  }

  span:nth-child(6) {
    bottom: 0;
    left: 50%;
    animation-delay: 1s;
    animation-duration: 2s;
  }

  span:nth-child(7) {
    bottom: 0;
    left: 60%;
    animation-delay: 1.2s;
    animation-duration: 2.2s;
  }

  span:nth-child(8) {
    bottom: 0;
    left: 70%;
    animation-delay: 1.4s;
    animation-duration: 2.4s;
  }

  span:nth-child(9) {
    bottom: 0;
    left: 80%;
    animation-delay: 1.6s;
    animation-duration: 2.6s;
  }

  span:nth-child(10) {
    bottom: 0;
    left: 90%;
    animation-delay: 1.8s;
    animation-duration: 2.8s;
  }
`

export const StarItem = styled.span`
  position: absolute;

  bottom: 50%;
  left: 0%;
  width: 4px;
  height: 4px;

  opacity: 0;

  background: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 50%;
  box-shadow:
    0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1),
    0 0 20px ${({ theme }) => theme.COLORS.PRIMARY};
  animation: ${animate} 3s linear infinite;

  &::before {
    content: '';
    position: absolute;
    bottom: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 1px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.COLORS.PRIMARY},
      transparent
    );
  }
`

export const Social = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    transition: 0.5s;
  }

  &:hover svg {
    filter: brightness(1.8)
      drop-shadow(0px 0px 20px ${({ theme }) => theme.COLORS.PRIMARY})
      drop-shadow(0px 0px 40px ${({ theme }) => theme.COLORS.PRIMARY});
  }
`

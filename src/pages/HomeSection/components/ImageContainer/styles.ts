import styled from 'styled-components'

interface ImageContainerProps {
  backgroundImage: string
}

export const ImageContainerScrap = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  height: 100%;
  width: fit-content;

  @media (max-width: 1000px) {
    height: fit-content;
    width: 100%;

    flex-direction: column-reverse;
  }
`

export const ImageContainer = styled.div<ImageContainerProps>`
  min-width: 480px;
  height: 80%;

  border-radius: 8px;

  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1333px) {
    height: 60%;
    min-width: 360px;
  }

  @media (max-width: 1000px) {
    height: 0px;
    min-width: 100%;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;

  height: 100%;

  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: row;

    height: fit-content;
    width: 100%;
  }
`

export const Social = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_PRIMARY};
  border-radius: 100%;

  padding: 12px;

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

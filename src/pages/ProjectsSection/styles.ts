import styled, { css } from 'styled-components'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARKER_PRIMARY};

  width: 100%;
  height: 100%;

  padding: 80px 10%;
  gap: 24px;

  animation: fadeIn 0.5s ease-in-out;
`

export const ProjectsHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  h2 {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE};
    text-align: left !important;
  }

  h2 span {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE};
  }
`

export const ProjectsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 24px;

  & :first-child {
    grid-column: span 2;
  }

  @media (max-width: 1060px) {
    grid-template-columns: 1fr;

    & :first-child {
      grid-column: span 1;
    }
  }
`

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARKER_SECONDARY};
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_PRIMARY};

  border-radius: 8px;

  transition: 0.5s;

  cursor: pointer;
`

interface ProjectImageProps {
  image: string
}

export const ProjectImage = styled.div<ProjectImageProps>`
  width: 100%;
  height: 360px;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;

  filter: saturate(0);

  border-radius: 8px 8px 0px 0px;

  transition: 0.5s;

  &:hover {
    filter: saturate(1);
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;

  h2 {
    ${({ theme }) => css`
      font-family: ${theme.FONTS.PRIMARY};
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

      text-align: justify;

      @media (max-width: 1333px) {
        font-size: ${theme.FONT_SIZE.XSMALL};
      }
    `};
  }
`

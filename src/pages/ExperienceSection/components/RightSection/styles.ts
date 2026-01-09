import styled, { css } from 'styled-components'

export const RightSectionContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  border-radius: 8px;

  padding: 32px 48px;

  background: ${({ theme }) => theme.COLORS.DARKER_SECONDARY};
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_PRIMARY};

  overflow-y: scroll;
`

export const RightSectionContainerTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXLARGE};
    color: ${theme.COLORS.GRAY_0};
  `}

  margin-bottom: 16px;
`

export const ExperienceItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  animation: fadeIn 0.5s ease-in-out;
`

export const ExperienceItemDetails = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.GRAY_0};

  padding: 32px 0;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.LIGHTER_PRIMARY};

  span {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.XSMALL};
      color: ${theme.COLORS.LIGHTER_PRIMARY};
      font-weight: ${theme.FONT_WEIGHT.BOLD};
    `}
  }

  h3 {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.LARGE};
      color: ${theme.COLORS.GRAY_0};
    `}
  }

  h4 {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.XSMALL};
      color: ${theme.COLORS.LIGHT_PRIMARY};
      font-weight: ${theme.FONT_WEIGHT.BOLD};
    `}
  }

  p {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.SMALL};
      color: ${theme.COLORS.GRAY_600};
      font-weight: ${theme.FONT_WEIGHT.BOLD};
    `}
  }

  ul li {
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.SMALL};
      color: ${theme.COLORS.GRAY_200};
    `}
  }
`

export const ExperienceItemDetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
`

export const IconScrap = styled.div`
  cursor: pointer;

  svg {
    transition: 0.5s;
  }

  &:hover svg {
    filter: brightness(1.8)
      drop-shadow(0px 0px 20px ${({ theme }) => theme.COLORS.PRIMARY})
      drop-shadow(0px 0px 40px ${({ theme }) => theme.COLORS.PRIMARY});
  }
`

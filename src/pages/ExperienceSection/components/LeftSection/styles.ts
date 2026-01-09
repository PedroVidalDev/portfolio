import styled, { css } from 'styled-components'

export const ExperienceLeftSection = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 400px;

  gap: 24px;

  h2 {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE};
  }

  h2 span {
    font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE};
  }

  li {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_PRIMARY};
    height: 2px;
  }

  button {
    width: 100% !important;
  }

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`

interface ExperienceItemProps {
  selected: boolean
}

export const ExperienceItem = styled.div<ExperienceItemProps>`
  display: flex;

  width: 100%;
  height: 55px;

  align-items: center;
  justify-content: space-between;

  gap: 16px;

  border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_PRIMARY};
  border-radius: 8px;

  padding: 8px 16px;

  cursor: pointer;

  transition: background-color 0.3s;

  background-color: ${({ selected, theme }) =>
    selected ? theme.COLORS.LIGHTER_PRIMARY : 'transparent'};

  svg {
    transition: fill 0.3s;
  }

  span {
    transition: color 0.3s;
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.COLORS.LIGHT_PRIMARY};
    }

    span {
      color: ${({ theme }) => theme.COLORS.LIGHT_PRIMARY};
    }
  }
`

export const ExperienceItemLeftSide = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`

export const ExperienceItemLabel = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM};
    color: ${theme.COLORS.GRAY_0};
  `}
`

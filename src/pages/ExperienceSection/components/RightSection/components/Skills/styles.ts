import styled, { css } from 'styled-components'

export const SkillsItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 32px;

  animation: fadeIn 0.5s ease-in-out;
`

export const SkillsTopicContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 16px;
`

export const SkillTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LARGE};
    color: ${theme.COLORS.GRAY_0};
  `}
`

export const SkillsTopicItems = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 12px;
`

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 84px;
  height: 84px;

  padding: 8px;

  border-radius: 8px;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_PRIMARY};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  svg {
    width: 100% !important;
    height: 100% !important;
  }

  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.COLORS.PRIMARY};
    background-color: ${({ theme }) => theme.COLORS.DARK_PRIMARY};
  }
`

import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_PRIMARY};

  width: 100%;
  height: 100%;

  padding: 64px 10%;
  gap: 24px;
`

export const ExperienceHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
`

export const ExperienceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;

  gap: 16px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.DARKER_PRIMARY};

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.75;
    transform: scale(1.02);
  }
`

export const ExperienceIcon = styled.div`
  min-width: 64px;
  height: 64px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ExperienceDetails = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  gap: 4px;

  p {
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  h3 {
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_0};
  }

  @media (max-width: 780px) {
    align-items: flex-start;
    justify-content: flex-start;

    flex-direction: column;

    gap: 0px;
  }
`

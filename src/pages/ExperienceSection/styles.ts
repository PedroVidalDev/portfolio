import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;

  background: ${({ theme }) => theme.COLORS.DARKER_SECONDARY};
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.COLORS.DARKER_SECONDARY} 0%,
    ${({ theme }) => theme.COLORS.DARKER_PRIMARY} 100%
  );

  width: 100%;
  height: 100%;

  padding: 80px 10%;
  gap: 64px;

  animation: fadeIn 0.5s ease-in-out;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: unset;
  }
`

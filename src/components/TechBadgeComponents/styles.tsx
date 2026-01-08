import styled, { css } from 'styled-components'

export const TechBadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-bottom: 8px;
`

export const TechBadge = styled.span`
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.LIGHT_PRIMARY};
    border-radius: 4px;
    padding: 2px 6px;

    font-family: ${theme.FONTS.PRIMARY};
    font-size: ${theme.FONT_SIZE.SMALL};
    color: ${theme.COLORS.LIGHT_PRIMARY};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};

    background-color: ${theme.COLORS.DARK_PRIMARY};

    @media (max-width: 1333px) {
      font-size: ${theme.FONT_SIZE.XSMALL};
    }
  `};
`

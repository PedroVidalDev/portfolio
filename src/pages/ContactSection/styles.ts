import styled from 'styled-components'

export const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.DARKER_PRIMARY};

  width: 100%;
  height: 100%;

  padding: 128px 10%;
  gap: 48px;

  @media (max-width: 925px) {
    flex-direction: column-reverse;
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  background-color: #02021e48;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_PRIMARY};

  width: 100%;

  border-radius: 8px;

  gap: 16px;
  padding: 24px;

  div {
    display: flex;
    flex-direction: row;

    gap: 16px;

    @media (max-width: 512px) {
      flex-direction: column;
    }
  }
`

export const ContactInput = styled.input`
  width: 100%;

  padding: 18px 16px;

  background: ${({ theme }) => theme.COLORS.GRAY_900};
  border: 0;

  font-family: ${({ theme }) => theme.FONTS.PRIMARY};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  &:focus {
    outline: none;
  }
`

export const ContactTextarea = styled.textarea`
  width: 100%;
  height: 100%;

  padding: 18px 16px;

  background: ${({ theme }) => theme.COLORS.GRAY_900};
  border: 0;

  font-family: ${({ theme }) => theme.FONTS.PRIMARY};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  resize: none;

  &:focus {
    outline: none;
  }
`

export const ContactTextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;

  p {
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  h2 {
    text-align: left !important;
  }
`

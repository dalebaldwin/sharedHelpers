import { css } from 'styled-components'

export const ButtonStyle = ({ theme }) => css`
  background-color: ${theme.buttonBackground};
`

export const ButtonStyleHTML = (theme) => css`
  margin: ${theme.baseSpacing};
  padding: 8px;
  border: 0px;
  border-radius: 4px;
  background-color: ${theme.buttonBackground};
  font-family: Karla;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: -0.32px;
  text-align: center;
  color: ${theme.buttonText};
`

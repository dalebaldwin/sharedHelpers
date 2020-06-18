
export const ButtonStyle = ({ theme }) => `
  background-color: ${theme.buttonBackground};
`

export const ButtonStyleHTML = ({ theme }) => `
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

// Sourced From Web

export const AppWrapperStyleWeb = ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background: ${theme.backgroundColor};
`

export const CountWrapperStyleWeb = ({ theme }) => `
  font-size: 36px;
  padding: ${theme.baseSpacing};
  font-family: 'Karla', sans-serif;
`

export const CustomButtonStyleWeb = ({ theme }) => `
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

export const TextExplainerStyleWeb = ({ theme }) => `
  font-size: 16px;
  padding: ${theme.baseSpacing};
  font-family: 'Karla', sans-serif;
`

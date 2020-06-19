export const StyledSharedCountText = ({ theme }) => `
  font-size: 36px;
  padding: ${theme.baseSpacing};
  text-align: center;
  font-family: 'Karla';
  font-weight: 400;
`

export const StyledSharedTextExplainerWrapper = ({ theme }) => `
  padding: ${theme.baseSpacing}
`

export const StyledSharedTextExplainer = ({ theme }) => `
  text-align: center;
  color: ${theme.basicText};
  font-family: 'Karla';
  font-weight: 400;
  font-size: 16px;
`

export const StyledSharedButton = ({ theme }) => `
  margin: ${theme.baseSpacing};
  padding: 12px;
  border: 0px;
  border-radius: 4px;
  background-color: ${theme.buttonBackground};
`

export const StyledSharedButtonText = ({ theme }) => `
  text-align: center;
  color: ${theme.buttonText};
  font-family: 'Karla';
  font-weight: 600;
  font-size: 16px;
`



// Font fallbacks don't work with RN, would likely need a global css sheet for fonts
// Heights that aren't PX or % value fail
// Flex doesn't always work the same way.
// Can't nest CSS
// Can't use media queries

// Excess values in RN styles



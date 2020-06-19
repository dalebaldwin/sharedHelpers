"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStyle = function (_a) {
    var theme = _a.theme;
    return "\n  background-color: " + theme.buttonBackground + ";\n";
};
exports.ButtonStyleHTML = function (_a) {
    var theme = _a.theme;
    return "\n  margin: " + theme.baseSpacing + ";\n  padding: 8px;\n  border: 0px;\n  border-radius: 4px;\n  background-color: " + theme.buttonBackground + ";\n  font-family: Karla;\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.75;\n  letter-spacing: -0.32px;\n  text-align: center;\n  color: " + theme.buttonText + ";\n";
};
// Sourced From Web
exports.AppWrapperStyleWeb = function (_a) {
    var theme = _a.theme;
    return "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  height: 100vh;\n  width: 100vw;\n  text-align: center;\n  background: " + theme.backgroundColor + ";\n";
};
exports.CountWrapperStyleWeb = function (_a) {
    var theme = _a.theme;
    return "\n  font-size: 36px;\n  padding: " + theme.baseSpacing + ";\n  font-family: 'Karla', sans-serif;\n";
};
exports.CustomButtonStyleWeb = function (_a) {
    var theme = _a.theme;
    return "\n  margin: " + theme.baseSpacing + ";\n  padding: 8px;\n  border: 0px;\n  border-radius: 4px;\n  background-color: " + theme.buttonBackground + ";\n  font-family: Karla;\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.75;\n  letter-spacing: -0.32px;\n  text-align: center;\n  color: " + theme.buttonText + ";\n";
};
exports.TextExplainerStyleWeb = function (_a) {
    var theme = _a.theme;
    return "\n  font-size: 16px;\n  padding: " + theme.baseSpacing + ";\n  font-family: 'Karla', sans-serif;\n";
};
// Source from Mobile
exports.StyledContainerMobile = function (_a) {
    var theme = _a.theme;
    return "\n  flex: 2;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  background-color: " + theme.backgroundColor + ";\n";
};
exports.StyledCountTextMobile = function (_a) {
    var theme = _a.theme;
    return "\n  font-size: 36px;\n  padding: " + theme.baseSpacing + ";\n  text-align: center;\n  font-family: 'Karla-Regular';\n";
};
exports.StyledButtonContainerMobile = function (_a) {
    var theme = _a.theme;
    return "\n  margin: " + theme.baseSpacing + ";\n  padding: 12px;\n  border-radius: 4px;\n  background-color: " + theme.buttonBackground + ";\n";
};
exports.StyledButtonTextMobile = function (_a) {
    var theme = _a.theme;
    return "\n  text-align: center;\n  color: " + theme.buttonText + ";\n  font-family: 'Karla';\n  font-weight: 600;\n  font-size: 16px;\n";
};
exports.StyledExplainerTextContainerMobile = function (_a) {
    var theme = _a.theme;
    return "\n  padding: " + theme.baseSpacing + ";\n";
};
exports.StyledExplainerTextMobile = function (_a) {
    var theme = _a.theme;
    return "\n  text-align: center;\n  color: " + theme.baseText + ";\n  font-family: 'Karla';\n  font-weight: 400;\n  font-size: 16px;\n";
};

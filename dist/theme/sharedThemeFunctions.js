"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSharedCountText = function (_a) {
    var theme = _a.theme;
    return "\n  font-size: 36px;\n  padding: " + theme.baseSpacing + ";\n  text-align: center;\n  font-family: 'Karla';\n  font-weight: 400;\n";
};
exports.StyledSharedTextExplainerWrapper = function (_a) {
    var theme = _a.theme;
    return "\n  padding: " + theme.baseSpacing + "\n";
};
exports.StyledSharedTextExplainer = function (_a) {
    var theme = _a.theme;
    return "\n  text-align: center;\n  color: " + theme.basicText + ";\n  font-family: 'Karla';\n  font-weight: 400;\n  font-size: 16px;\n";
};
exports.StyledSharedButton = function (_a) {
    var theme = _a.theme;
    return "\n  margin: " + theme.baseSpacing + ";\n  padding: 12px;\n  border-radius: 4px;\n  background-color: " + theme.buttonBackground + ";\n  font-family: 'Karla';\n  color: " + theme.buttonText + ";\n  font-weight: 600;\n  border: 0px;\n";
};
exports.StyledSharedButtonText = function (_a) {
    var theme = _a.theme;
    return "\n  text-align: center;\n  color: " + theme.buttonText + ";\n  font-family: 'Karla';\n  font-weight: 600;\n  font-size: 16px;\n";
};
// Font fallbacks don't work with RN, would likely need a global css sheet for fonts
// Heights that aren't PX or % value fail
// Flex doesn't always work the same way.
// Can't nest CSS
// Can't use media queries
// Excess values in RN styles

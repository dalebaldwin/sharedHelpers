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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var HeaderDropdown_1 = __importDefault(require("./HeaderDropdown"));
var Account_1 = __importDefault(require("./Account"));
var AccountMenu_1 = __importDefault(require("./AccountMenu"));
function default_1() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(HeaderDropdown_1.default, { overlay: AccountMenu_1.default },
            react_1.default.createElement(Account_1.default, null))));
}
exports.default = default_1;
//# sourceMappingURL=RightContent.js.map
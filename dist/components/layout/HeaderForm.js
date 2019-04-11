"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
function default_1(props) {
    return (react_1.default.createElement(antd_1.Form, { layout: "inline", style: { marginTop: -7 } }, props.children));
}
exports.default = default_1;
//# sourceMappingURL=HeaderForm.js.map
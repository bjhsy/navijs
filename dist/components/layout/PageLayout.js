"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Content = antd_1.Layout.Content;
function default_1(props) {
    return (react_1.default.createElement(antd_1.Layout, null,
        react_1.default.createElement(antd_1.PageHeader, { onBack: props.onBack, title: props.title, subTitle: props.subTitle || react_1.default.createElement("span", null, "\u00A0"), extra: props.header, footer: props.headerFooter }),
        react_1.default.createElement(Content, { style: { padding: 16 } }, props.children)));
}
exports.default = default_1;
//# sourceMappingURL=PageLayout.js.map
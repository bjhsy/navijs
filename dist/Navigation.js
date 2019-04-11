"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var layout_1 = __importDefault(require("antd/lib/layout"));
var menu_1 = __importDefault(require("antd/lib/menu"));
var icon_1 = __importDefault(require("antd/lib/icon"));
var SubMenu_1 = __importDefault(require("antd/lib/menu/SubMenu"));
var RightContent_1 = __importDefault(require("./components/header/RightContent"));
var Header = layout_1.default.Header, Sider = layout_1.default.Sider, Content = layout_1.default.Content;
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            collapsed: false
        };
        _this.toggle = function () {
            _this.setState({
                collapsed: !_this.state.collapsed
            });
        };
        return _this;
    }
    Navigation.prototype.componentDidMount = function () {
        var _this = this;
        this.props.body.forEach(function (node) {
            HTMLDocument.prototype.appendChild.call(_this.refs.main, node);
        });
    };
    Navigation.prototype.render = function () {
        return (react_1.default.createElement(layout_1.default, { className: "navi" },
            react_1.default.createElement(Header, null,
                react_1.default.createElement(menu_1.default, { theme: "dark", mode: "horizontal" },
                    react_1.default.createElement(menu_1.default.Item, { key: "1" }, "nav 1"),
                    react_1.default.createElement(menu_1.default.Item, { key: "2" }, "nav 2"),
                    react_1.default.createElement(menu_1.default.Item, { key: "3" }, "nav 3")),
                react_1.default.createElement(RightContent_1.default, null)),
            react_1.default.createElement(layout_1.default, null,
                react_1.default.createElement(Sider, { className: "flex" },
                    react_1.default.createElement(menu_1.default, { className: "navi", mode: "inline", defaultSelectedKeys: ["1"], defaultOpenKeys: ["sub1"] },
                        react_1.default.createElement(SubMenu_1.default, { key: "sub1", title: react_1.default.createElement("span", null,
                                react_1.default.createElement(icon_1.default, { type: "user" }),
                                "subnav 1") },
                            react_1.default.createElement(menu_1.default.Item, { key: "1" }, "option1"),
                            react_1.default.createElement(menu_1.default.Item, { key: "2" }, "option2"),
                            react_1.default.createElement(menu_1.default.Item, { key: "3" }, "option3"),
                            react_1.default.createElement(menu_1.default.Item, { key: "4" }, "option4")),
                        react_1.default.createElement(SubMenu_1.default, { key: "sub2", title: react_1.default.createElement("span", null,
                                react_1.default.createElement(icon_1.default, { type: "laptop" }),
                                "subnav 2") },
                            react_1.default.createElement(menu_1.default.Item, { key: "5" }, "option5"),
                            react_1.default.createElement(menu_1.default.Item, { key: "6" }, "option6"),
                            react_1.default.createElement(menu_1.default.Item, { key: "7" }, "option7"),
                            react_1.default.createElement(menu_1.default.Item, { key: "8" }, "option8")),
                        react_1.default.createElement(SubMenu_1.default, { key: "sub3", title: react_1.default.createElement("span", null,
                                react_1.default.createElement(icon_1.default, { type: "notification" }),
                                "subnav 3") },
                            react_1.default.createElement(menu_1.default.Item, { key: "9" }, "option9"),
                            react_1.default.createElement(menu_1.default.Item, { key: "10" }, "option10"),
                            react_1.default.createElement(menu_1.default.Item, { key: "11" }, "option11"),
                            react_1.default.createElement(menu_1.default.Item, { key: "12" }, "option12")))),
                react_1.default.createElement(layout_1.default, null,
                    react_1.default.createElement(Content, null,
                        react_1.default.createElement("div", { ref: "main" }))))));
    };
    return Navigation;
}(react_1.Component));
exports.default = Navigation;
//# sourceMappingURL=Navigation.js.map
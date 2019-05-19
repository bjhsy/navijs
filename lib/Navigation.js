"use strict";
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
var Navigation = function (props) {
    var contentBody = react_1.default.createRef();
    var _a = react_1.useState({ modules: [] }), site = _a[0], setSite = _a[1];
    var _b = react_1.useState({ menu: [] }), currentModule = _b[0], setCurrentModule = _b[1];
    var setDefaultModule = function (site) {
        if (typeof site.defaultModule === "number") {
            setCurrentModule(site.modules[site.defaultModule]);
        }
        else if (typeof site.defaultModule === "string") {
            setCurrentModule(site.modules.find(function (m) { return m.key === site.defaultModule; }));
        }
    };
    // toggle = () => {
    //   this.setState({
    //     collapsed: !this.state.collapsed
    //   });
    // };
    react_1.useEffect(function () {
        props.body.forEach(function (node) {
            contentBody.current.appendChild(node);
        });
        if (props.site.__proto__ === Promise.prototype) {
            props.site.then(function (result) {
                setSite(result);
                setDefaultModule(result);
            });
        }
        else {
            setSite(props.site);
            setDefaultModule(props.site);
        }
    }, []);
    var changeModule = function (m) {
        setCurrentModule(m);
        if (m.defaultUrl && m.defaultUrl !== "" && m.defaultUrl !== location.href) {
            location.href = m.defaultUrl;
        }
    };
    var openUrl = function (m) {
        if (m.url && m.url !== "" && m.url !== location.href) {
            location.href = m.url;
        }
    };
    var renderMenu = function (menu) {
        return menu.map(function (m) {
            return m.menu ? (react_1.default.createElement(SubMenu_1.default, { key: m.key, title: react_1.default.createElement("span", null,
                    m.icon && m.icon !== "" ? react_1.default.createElement(icon_1.default, { type: m.icon }) : "",
                    m.title) }, renderMenu(m.menu))) : (react_1.default.createElement(menu_1.default.Item, { key: m.key, onClick: function () { return openUrl(m); } },
                m.icon && m.icon !== "" ? react_1.default.createElement(icon_1.default, { type: m.icon }) : "",
                react_1.default.createElement("span", null, m.title)));
        });
    };
    return (react_1.default.createElement(layout_1.default, { className: "navi" },
        react_1.default.createElement(Header, null,
            react_1.default.createElement("div", { className: "logo" }),
            react_1.default.createElement(menu_1.default, { theme: "dark", mode: "horizontal", className: "menu" }, site.modules.map(function (m) { return (react_1.default.createElement(menu_1.default.Item, { key: m.key, onClick: function () { return changeModule(m); } },
                m.icon && m.icon !== "" ? react_1.default.createElement(icon_1.default, { type: m.icon }) : "",
                m.title)); })),
            react_1.default.createElement(RightContent_1.default, null)),
        react_1.default.createElement(layout_1.default, null,
            react_1.default.createElement(Sider, { className: "flex" },
                react_1.default.createElement(menu_1.default, { className: "navi", mode: "inline", defaultSelectedKeys: ["1"], defaultOpenKeys: ["sub1"] }, renderMenu(currentModule.menu))),
            react_1.default.createElement(layout_1.default, null,
                react_1.default.createElement(Content, null,
                    react_1.default.createElement("div", { ref: contentBody }))))));
};
exports.default = Navigation;
//# sourceMappingURL=Navigation.js.map
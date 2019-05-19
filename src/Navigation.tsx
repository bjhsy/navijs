import React, { useState, useEffect } from "react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import Icon from "antd/lib/icon";
import SubMenu from "antd/lib/menu/SubMenu";
import HeaderDropdown from "./components/header/HeaderDropdown";
import Account from "./components/header/Account";
import RightContent from "./components/header/RightContent";

const { Header, Sider, Content } = Layout;

const Navigation = function(props: { body: Node[]; site?: any }) {
  const contentBody = React.createRef<HTMLDivElement>();

  const [site, setSite] = useState<any>({ modules: [] });

  const [currentModule, setCurrentModule] = useState<any>({ menu: [] });

  const setDefaultModule = (site: any) => {
    if (typeof site.defaultModule === "number") {
      setCurrentModule(site.modules[site.defaultModule]);
    } else if (typeof site.defaultModule === "string") {
      setCurrentModule(
        site.modules.find((m: any) => m.key === site.defaultModule)
      );
    }
  };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // };

  useEffect(() => {
    props.body.forEach(node => {
      contentBody.current.appendChild(node);
    });

    if (props.site.__proto__ === Promise.prototype) {
      props.site.then((result: any) => {
        setSite(result);
        setDefaultModule(result);
      });
    } else {
      setSite(props.site);
      setDefaultModule(props.site);
    }
  }, []);

  const changeModule = (m: any) => {
    setCurrentModule(m);
    if (m.defaultUrl && m.defaultUrl !== "" && m.defaultUrl !== location.href) {
      location.href = m.defaultUrl;
    }
  };

  const openUrl = (m: any) => {
    if (m.url && m.url !== "" && m.url !== location.href) {
      location.href = m.url;
    }
  };

  const renderMenu = (menu: any) => {
    return menu.map((m: any) => {
      return m.menu ? (
        <SubMenu
          key={m.key}
          title={
            <span>
              {m.icon && m.icon !== "" ? <Icon type={m.icon} /> : ""}
              {m.title}
            </span>
          }
        >
          {renderMenu(m.menu)}
        </SubMenu>
      ) : (
        <Menu.Item key={m.key} onClick={() => openUrl(m)}>
          {m.icon && m.icon !== "" ? <Icon type={m.icon} /> : ""}
          <span>{m.title}</span>
        </Menu.Item>
      );
    });
  };

  return (
    <Layout className="navi">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" className="menu">
          {site.modules.map((m: any) => (
            <Menu.Item key={m.key} onClick={() => changeModule(m)}>
              {m.icon && m.icon !== "" ? <Icon type={m.icon} /> : ""}
              {m.title}
            </Menu.Item>
          ))}
        </Menu>
        <RightContent />
      </Header>
      <Layout>
        <Sider className="flex">
          <Menu
            className="navi"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
          >
            {renderMenu(currentModule.menu)}
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <div ref={contentBody} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Navigation;

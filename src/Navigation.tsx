import React, { Component, useState, useEffect } from "react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import Icon from "antd/lib/icon";
import SubMenu from "antd/lib/menu/SubMenu";
import HeaderDropdown from "./components/header/HeaderDropdown";
import Account from "./components/header/Account";
import RightContent from "./components/header/RightContent";
import Site from "./site.json";

const { Header, Sider, Content } = Layout;

export default function(props: { body: Node[] }) {
  const contentBody = React.createRef<HTMLDivElement>();

  const [site, setSite] = useState<any>({ modules: [] });

  const [currentModule, setCurrentModule] = useState<any>({ menu: [] });

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // };

  useEffect(() => {
    props.body.forEach(node => {
      contentBody.current.appendChild(node);
    });

    new Promise(resolve => {
      resolve(Site);
    }).then((result: any) => {
      setSite(result);
      if (typeof result.defaultModule === "number") {
        setCurrentModule(result.modules[result.defaultModule]);
      } else if (typeof result.defaultModule === "string") {
        setCurrentModule(
          result.modules.find((m: any) => m.key === result.defaultModule)
        );
      }
    });
  }, []);

  const changeModule = (m: any) => {
    setCurrentModule(m);
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
            {currentModule.menu.map((m: any) => {
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
                  {m.menu.map((sub: any) => (
                    <Menu.Item key={sub.key}>
                      {sub.icon && sub.icon !== "" ? (
                        <Icon type={sub.icon} />
                      ) : (
                        ""
                      )}
                      <span>{sub.title}</span>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={m.key}>
                  {m.icon && m.icon !== "" ? <Icon type={m.icon} /> : ""}
                  <span>{m.title}</span>
                </Menu.Item>
              );
            })}
            {/* <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu> */}
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
}

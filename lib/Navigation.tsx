import React, { Component } from "react";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import Icon from "antd/lib/icon";
import SubMenu from "antd/lib/menu/SubMenu";
import HeaderDropdown from "./components/header/HeaderDropdown";
import Account from "./components/header/Account";
import RightContent from "./components/header/RightContent";

const { Header, Sider, Content } = Layout;

export default class Navigation extends Component<{ body: Node[] }> {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  componentDidMount() {
    this.props.body.forEach(node => {
      HTMLDocument.prototype.appendChild.call(this.refs.main, node);
    });
  }

  render() {
    return (
      <Layout className="navi">
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">nav 11</Menu.Item>
            <Menu.Item key="2">nav 21</Menu.Item>
            <Menu.Item key="3">nav 31</Menu.Item>
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
              <SubMenu
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
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <div ref="main" />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

import React from "react";
import { Layout, PageHeader } from "antd";

const { Content } = Layout;

export default function(props: any) {
  return (
    <Layout>
      <PageHeader
        onBack={props.onBack}
        title={props.title}
        subTitle={props.subTitle || <span>&nbsp;</span>}
        extra={props.header}
        footer={props.headerFooter}
      />
      <Content style={{ padding: 16 }}>{props.children}</Content>
    </Layout>
  );
}

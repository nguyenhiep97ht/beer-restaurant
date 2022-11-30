import { Outlet } from "react-router";
import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import LogoImage from "@/assets/logo.png";
const { Header, Content, Footer } = Layout;
import { Link } from "react-router-dom";

const BasicLayout = () => (
  <Layout>
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        background: "#e6624f",
      }}
    >
      <div className="logo h-full flex items-center justify-between">
        <div className="my-auto">
          <img src={LogoImage} alt="logo" width={40} height={40} />
        </div>
        <div>
          <p className="text-white text-lg">Tận hưởng cuộc sống </p>
        </div>
      </div>
    </Header>

    <Content className="site-layout">
      <div className="site-layout-background">
        <Outlet />
      </div>
    </Content>
  </Layout>
);
export default BasicLayout;

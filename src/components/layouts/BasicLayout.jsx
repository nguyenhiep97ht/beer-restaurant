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
    <Link to="/">
      <div className="m-2 text-orange-600">Trở lại</div>
    </Link>
    <Content
      className="site-layout"
      style={{
        padding: "0 50px",
        marginTop: 64,
        height: "calc(100vh - 64px - 40px)",
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        <Outlet />
      </div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Beer restaurant HN
    </Footer>
  </Layout>
);
export default BasicLayout;

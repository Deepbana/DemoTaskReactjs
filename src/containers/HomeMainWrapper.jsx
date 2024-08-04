import React, { useState } from "react";
import { Layout } from "antd";
import SideBar from "../components/SideBar";
import ContentLayout from "../components/ContentLayout";
import Dashboard from "../components/Dashboard";
import Order from "../components/Order";

const { Content } = Layout;

const HomeMainWrapper = () => {
  const [selectedOption, setSelectedOption] = useState("1");

  const handleMenuClick = ({ key }) => {
    setSelectedOption(key);
  };

  const getContent = () => {
    switch (selectedOption) {
      case "1":
        return <Dashboard />;
      case "2":
        return <Order />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Content
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideBar
          selectedOption={selectedOption}
          handleMenuClick={handleMenuClick}
        />

        <ContentLayout
          selectedOption={selectedOption}
          getContent={getContent}
        />
      </Content>
    </Layout>
  );
};

export default HomeMainWrapper;

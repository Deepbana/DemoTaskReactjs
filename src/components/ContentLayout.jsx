import React from "react";
import { Layout, Breadcrumb } from "antd";
import Dashboard from "./Dashboard";
import Order from "./Order";
import CommonPageHeader from "./CommonPageHeader";
import { HomeOutlined } from "@ant-design/icons";
import "../css/sidebar.css";

const { Header, Content } = Layout;

const ContentLayout = ({ selectedOption, getContent }) => {
  return (
    <Content style={{ margin: "0px 0px 0px" }}>
      <Header className="p-0" style={{ background: "white" }}>
        <CommonPageHeader selectedOption={selectedOption} />
      </Header>
      <Content style={{ margin: "16px 16px" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <HomeOutlined style={{ color: "#5570f1", marginLeft: "10px" }} />
        </Breadcrumb> */}

        <Breadcrumb style={{ margin: "16px 0" }}>
          {selectedOption == 1 && (
            <>
              <Breadcrumb.Item>
                <HomeOutlined style={{ color: "#5570f1", marginLeft: "10px" }} />
              </Breadcrumb.Item>
            </>
          )}
          {selectedOption == 2 && (
            <>
              <Breadcrumb.Item>
                <HomeOutlined style={{ color: "#5570f1", marginLeft: "10px" }} />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Order
              </Breadcrumb.Item>
            </>
          )}
          {selectedOption == 3 && (
            <>
              <Breadcrumb.Item>
                <HomeOutlined style={{ color: "#5570f1", marginLeft: "10px" }} />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Customer
              </Breadcrumb.Item>
            </>
          )}
          {selectedOption == 4 && (
            <>
              <Breadcrumb.Item>
                <HomeOutlined style={{ color: "#5570f1", marginLeft: "10px" }} />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Inventory
              </Breadcrumb.Item>
            </>
          )}
          {selectedOption == 5 && (
            <>
              <Breadcrumb.Item>
                <HomeOutlined style={{ color: "#5570f1", marginLeft: "10px" }} />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Conversation
              </Breadcrumb.Item>
            </>
          )}
          {selectedOption == 6 && (
            <>
              <Breadcrumb.Item>
                <HomeOutlined style={{ color: "#5570f1", marginLeft: "10px" }} />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Setting
              </Breadcrumb.Item>
            </>
          )}
        </Breadcrumb>

        <div style={{ minHeight: 360 }}>
          {getContent()}
        </div>
      </Content>
    </Content>
  );
};

export default ContentLayout;

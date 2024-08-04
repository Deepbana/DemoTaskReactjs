import React, { useState, useEffect } from "react";
import { Menu, Layout, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { getItem } from "./utils"; // Assuming you move getItem function to utils.js or another appropriate file
import "../css/sidebar.css";
import bagIcon from "../assets/images/bag.png";
import conversationIcon from "../assets/images/conversation.png";
import dashboard from "../assets/images/fi_grid.png";
import Graph from "../assets/images/Graph.png";
import inventory from "../assets/images/inventory.png";
import settings from "../assets/images/settings.png";
import CustomersIcon from "../assets/images/Customers.png";
import LogoutIcon from "../assets/images/Logout.png";
import ContactIcon from "../assets/images/fi_headphones.png";
import GiftIcon from "../assets/images/fi_gift.png";
import Gift from "../assets/images/gift.png";

const { Sider } = Layout;

const SideBar = ({ selectedOption, handleMenuClick, handleLogout }) => {
  const items = [
    getItem(
      "Dashboard",
      "1",
      <img src={dashboard} width={20} height={20} alt="Dashboard" />
    ),
    getItem(
      "Orders",
      "2",
      <img src={bagIcon} width={20} height={20} alt="Orders" />
    ),
    getItem(
      "Customers",
      "3",
      <img src={CustomersIcon} width={20} height={20} alt="Customers" />
    ),
    getItem(
      "Inventory",
      "4",
      <img src={inventory} width={20} height={20} alt="Inventory" />
    ),
    getItem(
      "Conversations",
      "5",
      <img src={conversationIcon} width={20} height={20} alt="Conversations" />
    ),
    getItem(
      "Settings",
      "6",
      <img src={settings} width={20} height={20} alt="Settings" />
    ),
  ];

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleInitialResize = () => {
      if (window.innerWidth < 720) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    handleInitialResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };


  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          background: "#fff",
          position: "relative"
        }}
      >
        <div className="demo-logo-vertical" />
        <h2
          className="d-flex align-items-center"
          style={{
            margin: "10px",
          }}
        >
          <img
            src={Graph}
            width={30}
            height={30}
            preview={false}
            className="logout-icon"
          />
          {!collapsed && "Metrix"}
        </h2>
        <Menu
          mode="inline"
          selectedKeys={[selectedOption]}
          collapsed={collapsed}
          onClick={handleMenuClick}
          style={{
            maxWidth: "200px",
            padding: "12px",
          }}
        >
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>

      </Sider>
      <Button
        icon={<img src={ContactIcon} width={20} height={20} alt="ContactIcon" />}
        onClick={handleLogout}
        style={{
          position: "fixed",
          bottom: "150px",
          zIndex: 1,
          left: "42px",
          transform: !collapsed ? "none" : "translateX(-50%)",
          height: "48px",
          color: "#000000E0",
          lineHeight: "48px",
          textAlign: "center",
          background: "transparent",
          cursor: "pointer",
          transition: "all 0.2s",
          width: "135px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none"
        }}
      >
        {!collapsed && "Contact Support"}
      </Button>
      <Button
        icon={<img src={GiftIcon} width={20} height={20} alt="freegift" />}
        onClick={handleLogout}
        style={{
          position: "fixed",
          bottom: "100px",
          zIndex: 1,
          left: "42px",
          transform: !collapsed ? "none" : "translateX(-50%)",
          height: "48px",
          color: "#000000E0",
          lineHeight: "48px",
          textAlign: "center",
          background: "transparent",
          cursor: "pointer",
          transition: "all 0.2s",
          width: "135px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none"
        }}
      >
        {!collapsed && "Free Gift Awaits You"}
      </Button>
      <Button
        icon={<img src={LogoutIcon} width={20} height={20} alt="Logout" />}
        onClick={handleLogout}
        style={{
          position: "fixed",
          bottom: "50px",
          zIndex: 1,
          left: "42px",
          transform: !collapsed ? "none" : "translateX(-50%)",
          height: "48px",
          color: "#d57e7e",
          lineHeight: "48px",
          textAlign: "center",
          background: "transparent",
          cursor: "pointer",
          transition: "all 0.2s",
          width: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none"
        }}
      >
        {!collapsed && "Logout"}
      </Button>

    </>
  );
};

export default SideBar;

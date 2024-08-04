import React from "react";
import { Card, Col, Row } from "antd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomCard from "./CustomCard";
import CustomChart from "./CustomChart";
import OrderHistory from "./OrderHistory";
import ProgressGraph from './ProgressGraph'
import inventoryBlue from "../assets/images/inventoryBlue.png";
import cardicon from "../assets/images/cardicon.png";
import iphone13 from "../assets/images/iphone13.png";
import "../css/Card.css";

const CustomCardWithChart = () => {
  const orders = [
    {
      image: iphone13,
      productName: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Pending",
      statusColor: "#CC5F5F",
      statusBackground: "#F57E77",
    },
    {
      image: iphone13,
      productName: "iPhone 13",
      price: "₦730,000.00",
      quantity: 2,
      date: "14 Sept 2022",
      status: "Completed",
      statusColor: "#4CAF50",
      statusBackground: "#C8E6C9",
    },
    {
      image: iphone13,
      productName: "iPhone 13",
      price: "₦730,000.00",
      quantity: 2,
      date: "14 Sept 2022",
      status: "Completed",
      statusColor: "#4CAF50",
      statusBackground: "#C8E6C9",
    },
    {
      image: iphone13,
      productName: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Pending",
      statusColor: "#CC5F5F",
      statusBackground: "#F57E77",
    },
    {
      image: iphone13,
      productName: "iPhone 13",
      price: "₦730,000.00",
      quantity: 2,
      date: "14 Sept 2022",
      status: "Completed",
      statusColor: "#4CAF50",
      statusBackground: "#C8E6C9",
    },
    {
      image: iphone13,
      productName: "iPhone 13",
      price: "₦730,000.00",
      quantity: 2,
      date: "14 Sept 2022",
      status: "Completed",
      statusColor: "#4CAF50",
      statusBackground: "#C8E6C9",
    },
    {
      image: iphone13,
      productName: "iPhone 13",
      price: "₦730,000.00",
      quantity: 2,
      date: "14 Sept 2022",
      status: "Completed",
      statusColor: "#4CAF50",
      statusBackground: "#C8E6C9",
    },
    {
      image: iphone13,
      productName: "iPhone 13",
      price: "₦730,000.00",
      quantity: 1,
      date: "12 Sept 2022",
      status: "Pending",
      statusColor: "#CC5F5F",
      statusBackground: "#F57E77",
    },
    {
      image: iphone13,
      productName: "iPhone 13",
      price: "₦730,000.00",
      quantity: 2,
      date: "14 Sept 2022",
      status: "Completed",
      statusColor: "#4CAF50",
      statusBackground: "#C8E6C9",
    },
    {
      image: iphone13,
      productName: "iPhone 13",
      price: "₦730,000.00",
      quantity: 2,
      date: "14 Sept 2022",
      status: "Completed",
      statusColor: "#4CAF50",
      statusBackground: "#C8E6C9",
    }
  ];
  return (
    <Row gutter={24}>
      <Col xs={24} lg={16}>
        <Row gutter={24}>
          <Col xs={24} lg={12}>
            <Card
              bordered={false}
              style={{
                padding: "20px 12px",
                marginTop: "20px",
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <span
                    style={{
                      color: "#bec0ca",
                      fontWeight: 300,
                      fontSize: "14px",
                    }}
                  >
                    Marketting
                  </span>
                  <div
                    style={{
                      color: "#bec0ca",
                      fontWeight: 300,
                      fontSize: "12px",
                    }}
                  >
                    <span>This Week</span>
                    <ExpandMoreIcon />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span
                    style={{
                      color: "#5570F1",
                      fontWeight: 300,
                      fontSize: "12px",
                    }}
                  >
                    • Acquisition
                  </span>
                  <span
                    style={{
                      color: "#97A5EB",
                      fontWeight: 300,
                      fontSize: "12px",
                    }}
                  >
                    • Purchase
                  </span>
                  <span
                    style={{
                      color: "#FFCC91",
                      fontWeight: 300,
                      fontSize: "12px",
                      marginRight: "8px",
                    }}
                  >
                    • Retention
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-around">
                <CustomChart />
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              bordered={false}
              style={{
                padding: "12px",
                height: 130,
                marginTop: "20px",
                background: "#5570F1",
              }}
            >
              <div>
                <div>
                  <img src={inventoryBlue} width={30} height={30} alt="icon" />
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4">
                  <div>
                    <span
                      style={{
                        color: "#bec0ca",
                        fontWeight: 300,
                        fontSize: "13px",
                      }}
                    >
                      All Products
                    </span>
                    <h5 style={{ color: "#fff", fontWeight: 300 }}>45</h5>
                  </div>
                  <div>
                    <span
                      style={{
                        color: "#bec0ca",
                        fontWeight: 300,
                        fontSize: "13px",
                      }}
                    >
                      Active
                    </span>
                    <h5 style={{ color: "#fff", fontWeight: 300 }}>
                      45
                      <span
                        style={{
                          color: "#DBDEEE",
                          fontWeight: 300,
                          fontSize: "11px",
                          marginLeft: "10px",
                        }}
                      >
                        +24%
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </Card>
            <Card
              bordered={false}
              style={{
                padding: "20px 12px",
                height: 130,
                marginTop: "20px",
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <img src={cardicon} width={30} height={30} alt="icon" />
                  <div
                    style={{
                      color: "#bec0ca",
                      fontWeight: 300,
                      fontSize: "12px",
                    }}
                  >
                    <span>This Week</span>
                    <ExpandMoreIcon />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4">
                  <div>
                    <span
                      style={{
                        color: "#CC5F5F",
                        fontWeight: 300,
                        fontSize: "14px",
                      }}
                    >
                      Abandoned Cart
                    </span>
                    <h5>
                      20%
                      <span
                        style={{
                          color: "#519C66",
                          fontWeight: 300,
                          fontSize: "11px",
                          marginLeft: "10px",
                        }}
                      >
                        +0.00%
                      </span>
                    </h5>
                  </div>
                  <div>
                    <span
                      style={{
                        color: "#8B8D97",
                        fontWeight: 300,
                        fontSize: "14px",
                      }}
                    >
                      Customers
                    </span>
                    <h5>20%</h5>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <ProgressGraph />
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={8}>
        <OrderHistory orders={orders} />
      </Col>
    </Row>
  );
};

export default CustomCardWithChart;

import React from "react";
import { Card, Col, Row } from 'antd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/Card.css';

const CustomCard = ({ cardData }) => {
  return (
    <Row gutter={24}>
      {cardData.map((data, index) => (
        <Col xs={24} md={8} key={index}>
          <Card
            bordered={false}
            style={{
              padding: "12px",
              height: 130,
              marginTop: "20px"
            }}
          >
            <div>
              <div className="d-flex align-items-center justify-content-between">
                <img src={data.icon} width={30} height={30} alt="icon" />
                <div style={{ color: "#bec0ca", fontWeight: 300, fontSize: "12px" }}>
                  <span>{data.timeframe}</span>
                  <ExpandMoreIcon />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-4">
                {data.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <span style={{ color: "#bec0ca", fontWeight: 300, fontSize: "14px" }}>{metric.label}</span>
                    <h5>{metric.value}{metric.change && <span style={{ color: metric.change.color, fontWeight: 300, fontSize: "11px", marginLeft: "10px" }}>{metric.change.value}</span>}</h5>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CustomCard;

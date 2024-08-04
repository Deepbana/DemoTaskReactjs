import React from "react";
import CustomCard from "./CustomCard";
import CustomTable from "./CustomTable";
import cardicon from "../assets/images/cardicon.png";
import Customers from "../assets/images/Customers.png";
import bag from "../assets/images/bag.png";

const cardData = [
  {
    icon: cardicon,
    timeframe: "This Week",
    metrics: [
      { label: "Sales", value: "₦4,000,000.00" },
      { label: "Volume", value: "450", change: { value: "+20.00%", color: "green" } }
    ]
  },
  {
    icon: Customers,
    timeframe: "This Week",
    metrics: [
      { label: "Customers", value: "1,250", change: { value: "+15.80%", color: "green" } },
      { label: "Active", value: "450", change: { value: "85%", color: "green" } }
    ]
  },
  {
    icon: bag,
    timeframe: "This Week",
    metrics: [
      { label: "All Orders", value: "450" },
      { label: "Pending", value: "5" },
      { label: "Completed", value: "445" }
    ]
  },
];

const Order = () => {
  return (
  <>
    <CustomCard cardData={cardData} />
    <CustomTable />
  </>
)};

export default Order;

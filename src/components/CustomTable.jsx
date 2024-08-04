import React, { useState } from "react";
import { Table, Input, Button, DatePicker, Dropdown, Menu } from "antd";
import { SearchOutlined, FilterOutlined, SendOutlined, DownOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import '../css/Card.css';
dayjs.extend(customParseFormat);

const dateFormat = 'YYYY-MM-DD';

const CustomTable = () => {
  const [searchOrder, setSearchOrder] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filters, setFilters] = useState({ orderType: null, status: null });

  const orders = [
    {
      "CustomerName": "Janet Adebayo",
      "OrderDate": "2024-08-12",
      "OrderType": "Home Delivery",
      "TrackingID": "9348fjt73",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 1
    },
    {
      "CustomerName": "Samuel Johnson",
      "OrderDate": "2024-07-12",
      "OrderType": "Home Delivery",
      "TrackingID": "9348fjt74",
      "OrderTotal": "₦25,000.00",
      "Action": "In-Progress",
      "Status": "In-Progress",
      "key": 2
    },
    {
      "CustomerName": "Francis Doe",
      "OrderDate": "2024-08-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt75",
      "OrderTotal": "₦25,000.00",
      "Action": "Pending",
      "Status": "Pending",
      "key": 3
    },
    {
      "CustomerName": "Christian Dior",
      "OrderDate": "2024-08-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt76",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 4
    },
    {
      "CustomerName": "Christian Dior",
      "OrderDate": "2024-07-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt77",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 5
    },
    {
      "CustomerName": "Janet Adebayo",
      "OrderDate": "2024-08-12",
      "OrderType": "Home Delivery",
      "TrackingID": "9348fjt78",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 6
    },
    {
      "CustomerName": "Samuel Johnson",
      "OrderDate": "2024-08-12",
      "OrderType": "Home Delivery",
      "TrackingID": "9348fjt79",
      "OrderTotal": "₦25,000.00",
      "Action": "In-Progress",
      "Status": "In-Progress",
      "key": 7
    },
    {
      "CustomerName": "Francis Doe",
      "OrderDate": "2024-08-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt80",
      "OrderTotal": "₦25,000.00",
      "Action": "Pending",
      "Status": "Pending",
      "key": 8
    },
    {
      "CustomerName": "Christian Dior",
      "OrderDate": "2024-07-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt81",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 9
    },
    {
      "CustomerName": "Christian Dior",
      "OrderDate": "2024-08-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt82",
      "OrderTotal": "₦25,000.00",
      "Action": "Completed",
      "Status": "Completed",
      "key": 10
    },
    {
      "CustomerName": "Francis Doe",
      "OrderDate": "2024-08-12",
      "OrderType": "Pick Up",
      "TrackingID": "9348fjt75",
      "OrderTotal": "₦25,000.00",
      "Action": "Pending",
      "Status": "Pending",
      "key": 11
    },
  ];

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "CustomerName",
      key: "CustomerName",
      sorter: true,
    },
    {
      title: "Order Date",
      dataIndex: "OrderDate",
      key: "OrderDate",
      sorter: true,
      render: (text) => dayjs(text).format(dateFormat),
    },
    {
      title: "Order Type",
      dataIndex: "OrderType",
      key: "OrderType",
      sorter: true,
    },
    {
      title: "Tracking ID",
      dataIndex: "TrackingID",
      key: "TrackingID",
      sorter: true,
    },
    {
      title: "Order Total",
      dataIndex: "OrderTotal",
      key: "OrderTotal",
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      sorter: true,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      sorter: true,
    },
  ];

  const handleTableChange = (pagination, filters, sorter) => {
    setSortColumn(sorter.field);
    setSortOrder(sorter.order);
  };

  const handleSearch = (e) => {
    setSearchOrder(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filterOrders = (orders) => {
    return orders.filter(order => {
      const matchesSearch = order.CustomerName.toLowerCase().includes(searchOrder.toLowerCase());
      const matchesDate = selectedDate ? dayjs(order.OrderDate).isSame(selectedDate, 'day') : true;
      const matchesOrderType = filters.orderType ? order.OrderType === filters.orderType : true;
      const matchesStatus = filters.status ? order.Status === filters.status : true;

      console.log('Order:', order);
      console.log('Matches Search:', matchesSearch);
      console.log('Matches Date:', matchesDate);
      console.log('Matches OrderType:', matchesOrderType);
      console.log('Matches Status:', matchesStatus);

      return matchesSearch && matchesDate && matchesOrderType && matchesStatus;
    });
  };

  const filteredOrders = filterOrders(orders);

  const sortedData = [...filteredOrders].sort((a, b) => {
    if (!sortColumn) return 0;
    const order = sortOrder === "ascend" ? 1 : -1;
    if (a[sortColumn] < b[sortColumn]) return -order;
    if (a[sortColumn] > b[sortColumn]) return order;
    return 0;
  });

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleMenuClick = ({ key }) => {
    const [filterType, ...filterValueParts] = key.split('-');
    const filterValue = filterValueParts.join('-'); // Join parts to handle values with hyphens
    console.log('Filter Type:', filterType); // Debugging line
  console.log('Filter Value:', filterValue); // Debugging line
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: filterValue === 'all' ? null : filterValue,
    }));
  };

  const filterMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.SubMenu key="orderType" title="Order Type">
        <Menu.Item key="orderType-all">All</Menu.Item>
        <Menu.Item key="orderType-Home Delivery">Home Delivery</Menu.Item>
        <Menu.Item key="orderType-Pick Up">Pick Up</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="status" title="Status">
        <Menu.Item key="status-all">All</Menu.Item>
        <Menu.Item key="status-Completed">Completed</Menu.Item>
        <Menu.Item key="status-In-Progress">In-Progress</Menu.Item>
        <Menu.Item key="status-Pending">Pending</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  return (
    <div className="mt-3">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <span style={{ fontWeight: 400, fontSize: "16px" }}>Customer Orders</span>
        <div className="d-flex all-filter-btn">
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Search Order"
            onChange={handleSearch}
            className="customer-order-search-input"
            style={{ marginBottom: 16, width: "50%", marginLeft: "10px" }}
          />
          <Dropdown overlay={filterMenu} trigger={['click']}>
            <Button icon={<FilterOutlined />} style={{ marginLeft: "10px",marginRight: "10px", marginBottom: "10px" }}>Filter</Button>
          </Dropdown>
          <DatePicker
            format={dateFormat}
            onChange={handleDateChange}
            style={{ marginLeft: "10px", marginRight: "10px",marginBottom: "10px" }}
          />
          <Button icon={<SendOutlined />} style={{ marginLeft: "10px", marginRight: "10px",marginBottom: "10px" }}>Share</Button>
          <Button icon={<DownOutlined />} style={{ marginRight: "10px",marginBottom: "10px" }}>Bulk Action</Button>
          
        </div>
      </div>
      <div className="tabel-data-customers"> 
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={sortedData}
          pagination={true}
          onChange={handleTableChange}
          rowKey="key"
/>
      </div>
    </div>
  );
};

export default CustomTable;

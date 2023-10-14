import React, { useState } from "react";
import { MenuUnfoldOutlined, BookOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Books", "books", <MenuUnfoldOutlined />, [
    getItem("Book List", "/books"),
    getItem("Add New Book", "/add-book"),
    getItem("Departments", "/departments", <BookOutlined />, [
      getItem("Music", "/music"),
      getItem("Study", "/study"),
    ]),
  ]),
];
const App = () => {
  const [current, setCurrent] = useState("1");
  const navigate = useNavigate();

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 200,
      }}
      defaultOpenKeys={["books"]}
      selectedKeys={[current]}
      mode="inline"
      items={items}
    />
  );
};
export default App;

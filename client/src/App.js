import React, { useState } from "react";
import { MenuUnfoldOutlined, BookOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import useIsMobile from "./hooks/useIsMobile";

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
      getItem("Music", "/books/music"),
      getItem("Study", "/books/study"),
    ]),
  ]),
];
const App = () => {
  const [current, setCurrent] = useState("1");
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: `${isMobile ? "150px" : "200px"}`}}
      defaultOpenKeys={["books"]}
      selectedKeys={[current]}
      mode="inline"
      items={items}
    />
  );
};
export default App;

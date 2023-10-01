import React from "react";
import { Space, Table } from "antd";
const { Column, ColumnGroup } = Table;

const BookList = ({books}) => (
  <Table dataSource={books} size="middle" style={{ width: "80%" , margin: "auto"}} >
    <Column title="Id" dataIndex="_id" key="_id" />
    <ColumnGroup title="Name">
      <Column title="Title" dataIndex="title" key="title" />
      <Column title="Author" dataIndex="author" key="author" />
    </ColumnGroup>
    <Column title="Quantity" dataIndex="quantity" key="quantity" />
    <Column title="Department" dataIndex="department" key="department" />
    <Column title="Comments" dataIndex="comments" key="comments" />
    <Column
      title="Action"
      key="action"
      render={() => (
        <Space size="middle">
          <a>Delete</a>
          <a>Lend</a>
          <a>Return</a>
        </Space>
      )}
    />
  </Table>
);
export default BookList;

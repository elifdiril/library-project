import React from "react";
import { Space, Table, message } from "antd";
import axios from "axios";
const { Column, ColumnGroup } = Table;

const BookList = ({ books }) => {
  const deleteBook = (id) => {
    axios.delete(`/delete-book/${id}`).then(() => {
      message.success("Book deleted successfully");
    }).catch((err) => {
      message.error(err);
    })
  }

  return(<Table
    dataSource={books}
    size="middle"
    style={{ width: "80%", margin: "auto" }}
  >
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
      render={(row) => (
        <Space size="middle">
          <a onClick={() => deleteBook(row._id)}>Delete</a>
          <a>Lend</a>
          <a>Return</a>
        </Space>
      )}
    />
  </Table>)
};
export default BookList;

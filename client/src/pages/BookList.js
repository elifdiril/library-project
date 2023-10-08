import React from "react";
import { Space, Table, message } from "antd";
import useBook from "../hooks/useBook";
const { Column, ColumnGroup } = Table;

const BookList = () => {
  const { books, updateBook, removeBook } = useBook();

  const deleteBook = (id) => {
    removeBook(id);
  }

  const lendBook = (book) => {
    if (book.quantity === 0) {
      message.error("Book is out of stock");
    } else {
      updateBook(book._id, {quantity : book.quantity - 1});
    }
  }

  const returnBook = (book) => {
    updateBook(book._id, {quantity : book.quantity + 1})
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
          <a onClick={() => lendBook(row)}>Lend</a>
          <a onClick={() => returnBook(row)}>Return</a>
        </Space>
      )}
    />
  </Table>)
};
export default BookList;

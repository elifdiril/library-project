import React, { useEffect, useState } from "react";
import { Space, Table, message } from "antd";
import useBook from "../hooks/useBook";
import { useParams } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
const { Column, ColumnGroup } = Table;

const BookList = () => {
  const params = useParams();
  const { type } = params;
  const { books, updateBook, removeBook, gettingBooksByType, getAllBookList } =
    useBook();
  const [data, setData] = useState([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchData = async () => {
      if (type) {
        const booksByType = await gettingBooksByType(type);
        setData(booksByType);
      } else {
        const books = await getAllBookList();
        setData(books);
      }
    };
    fetchData();
  }, [type, books]);

  const deleteBook = (id) => {
    removeBook(id);
  };

  const lendBook = (book) => {
    if (book.quantity === 0) {
      message.error("Book is out of stock");
    } else {
      updateBook(book._id, { quantity: book.quantity - 1 });
    }
  };

  const returnBook = (book) => {
    updateBook(book._id, { quantity: book.quantity + 1 });
  };

  return (
    <Table
      dataSource={data}
      size="middle"
      style={{ width: `${isMobile ? "80%" : "60%"}`, margin: "auto", marginTop: "20px" }}
    >
      {!isMobile && <Column title="Id" dataIndex="_id" key="_id" />}
      <ColumnGroup title="Name">
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Author" dataIndex="author" key="author" />
      </ColumnGroup>
      <Column title="Quantity" dataIndex="quantity" key="quantity" />
      <Column title="Department" dataIndex="department" key="department" />
      <Column title="Comments" dataIndex="comments" key="comments" />
      {!isMobile && <Column
        title="Action"
        key="action"
        render={(row) => (
          <Space size="small">
            <a onClick={() => deleteBook(row._id)}>Delete</a>
            <a onClick={() => lendBook(row)}>Lend</a>
            <a onClick={() => returnBook(row)}>Return</a>
          </Space>
        )}
      />}
    </Table>
  );
};
export default BookList;

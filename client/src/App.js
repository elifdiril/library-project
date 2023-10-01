import React, { useEffect, useState } from 'react';
import { MenuUnfoldOutlined, BookOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { redirect } from "react-router-dom";
import AddNewBook from './pages/AddNewBook';
import BookList from './pages/BookList';
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
  getItem('Books', 'books', <MenuUnfoldOutlined />, [
    getItem('Book List', '/books'),
    getItem('Add New Book', '/add-book'),
    getItem('Departments', '/departments', <BookOutlined />, [getItem('Music', '/music'), getItem('Study', '/study')]),
  ]),
];
const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [current, setCurrent] = useState('1');

  useEffect(() => {
    fetch('/books').then(res => res.json()).then(data => setBooks(data)).catch(err => console.log(err));
  }, []);

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    redirect(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={['books']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
      <AddNewBook />
      <BookList books={books} setSelectedBook={setSelectedBook}/>
    </>
  );
};
export default App;

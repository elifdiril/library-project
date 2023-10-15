import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import AddNewBook from "./pages/AddNewBook";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <App />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<AddNewBook />} />
          <Route path="/books/:type" element={<BookList />} />
        </Routes>
      </div>
    </QueryClientProvider>
  </BrowserRouter>
);

reportWebVitals();

import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookList from "./pages/BookList";
import BookLayout from "./BookLayout";

const BookRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
};

export default BookRoutes;

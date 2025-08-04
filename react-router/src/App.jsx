import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import BookLayout from "./BookLayout";
import BookRoutes from "./BookRoutes";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookList from "./pages/BookList";

export default function App() {
  const location = useLocation();
  return (
    <>
      {/* <Routes location="/books">
        <Route path="/books" element={<h2>Extra content!</h2>} />
      </Routes> */}
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? { color: "red" } : {})}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/about">
              {({ isActive }) => (isActive ? "Active About" : "About")}
            </NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/*" element={<BookRoutes />} />

        {/* <Route path="/books">
          <Route index element={<BookList />} />
          <Route path="/:id" element={<Book />} />
          <Route path="/new" element={<NewBook />} />
        </Route> */}

        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

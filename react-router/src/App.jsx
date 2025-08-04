import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import BookLayout from "./BookLayout";
import BookRoutes from "./BookRoutes";

export default function App() {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

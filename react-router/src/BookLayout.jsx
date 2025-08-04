import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function BookLayout() {
  const [searchParam, setSearchParam] = useSearchParams({ n: 3 });
  const number = searchParam.get("n");

  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${number}`}>Book {number}</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      <Outlet context={{ title: "Hello world!" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParam({ n: e.target.value })}
      />
    </>
  );
}

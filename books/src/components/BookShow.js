import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import { BooksContext } from "./BooksContext";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { editBookById, deleteBookById } = useContext(BooksContext);

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    editBookById(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;

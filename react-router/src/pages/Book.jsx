import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const obj = useOutletContext();

  return (
    <h1>
      Book {id} {obj.title}
    </h1>
  );
};

export default Book;

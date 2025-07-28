import "./App.css";
import Searchbar from "./components/Searchbar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;

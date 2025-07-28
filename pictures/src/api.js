import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("http://localhost:3001/api/search", {
    params: { query: term },
  });

  return response.data.results;
};

export default searchImages;

import axios from "axios";

export const requests = {
  fetchProducts: `${process.env.BASE_URL}`,
};

// for "react-query"
export const Products = async () => {
  return await axios(`${process.env.BASE_URL}`).then(
    (response) => response.data
  );
};

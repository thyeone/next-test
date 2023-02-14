import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

export const requests = {
  fetchProducts: `${BASE_URL}`,
};

export const productDetail = () => {};

// for "react-query"
export const Products = async () => {
  return await axios(`https://dummyjson.com/products`).then(
    (response) => response.data
  );
};

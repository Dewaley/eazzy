import axios from "axios";

const baseUrl = "https://noserver.tryeazzy.co/api";

const fetchCategories = async () => {
  return axios
    .get(baseUrl + "/category", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const searchProduct = async (data) => {
  return axios
    .get(baseUrl + `/product/search/${data}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const fetchAllProducts = async () => {
  return axios
    .get(baseUrl + "/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const fetchCategoryProducts = async (data) => {
  return axios
    .get(baseUrl + "/product/category/" + data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const addToCart = async (data) => {
  return axios
    .post(baseUrl + "/cart", data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("geeToken")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const editCart = async ({ id, data }) => {
  return axios
    .patch(baseUrl + "/cart/" + id, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("geeToken")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const delCart = async (id) => {
  return axios
    .delete(baseUrl + "/cart/" + id, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("geeToken")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const fetchSingleProduct = async (data) => {
  return axios
    .get(baseUrl + "/product/" + data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const fetchCart = async () => {
  return axios
    .get(baseUrl + "/cart", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("geeToken")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const emptyCart = () => {
  return axios
  .delete(baseUrl + "/cart", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("geeToken")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    return response;
  })
  .catch((error) => {
    return error.response;
  });
}

const ProductServices = {
  fetchCategories,
  searchProduct,
  fetchAllProducts,
  fetchCategoryProducts,
  addToCart,
  editCart,
  fetchSingleProduct,
  fetchCart,
  delCart,
  emptyCart
};

export default ProductServices;

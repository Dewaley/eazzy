import axios from "axios";

const ORDERS_URL = "https://noserver.tryeazzy.co/api/orders";

const placeOrder = async (data) => {
  return axios
    .post(ORDERS_URL + "/getCheckoutUrl", data, {
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

const confirmPayment = async (data) => {
  return axios
  .get(ORDERS_URL + "/confirm/" + data, {
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

const PaymentServices = {
  placeOrder,
  confirmPayment,
};

export default PaymentServices;

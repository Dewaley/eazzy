import axios from "axios";

const CHECKOUT_URL = "https://noserver.tryeazzy.co/api/orders/getCheckoutUrl";

const placeOrder = async (data) => {
  return axios
    .post(CHECKOUT_URL, data, {
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

const PaymentServices = {
  placeOrder,
};

export default PaymentServices;

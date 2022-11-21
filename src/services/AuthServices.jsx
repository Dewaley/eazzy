import axios from "axios";

const USR_URL = "https://eazzy-tech.herokuapp.com/api/user";
const BUS_URL = "https://eazzy-tech.herokuapp.com/api/business";

const signupBusiness = async (data) => {
  return axios
    .post(BUS_URL + "/signup", data, {
      headers: {
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

const signinBusiness = async (data) => {
    return axios
      .post(BUS_URL + "/signin", data, {
        headers: {
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

const AuthServices = {signupBusiness,signinBusiness};

export default AuthServices;

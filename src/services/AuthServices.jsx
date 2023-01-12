import axios from "axios";

const USR_URL = "https://noserver.tryeazzy.co/api/user";
const BUS_URL = "http://server.tryeazzy.co/api/business";

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

const forgotPassword = async (data) => {
  return axios
    .post(USR_URL + "/forgot", data, {
      headers: {
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

const signupUser = async (data) => {
  return axios
    .post(USR_URL + "/signup", data, {
      headers: {
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

const signin = async (data) => {
  return axios
    .post(USR_URL + "/signin", data, {
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

const fetchUser = async () => {
  return axios
    .get(USR_URL, {
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

const updateUser = async (data) => {
  return axios
    .patch(USR_URL, data, {
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

const logout = async () => {
  return axios
    .get(USR_URL + "/signout", {
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

const AuthServices = {
  signupBusiness,
  signin,
  signupUser,
  fetchUser,
  logout,
  updateUser,
  forgotPassword
};

export default AuthServices;

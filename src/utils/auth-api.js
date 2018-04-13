import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1";

export { login, register };

function login(loginDetails, props) {
  const url = `${BASE_URL}/signin/ManualLogin`;
  return axios
    .post(url, loginDetails)
    .then(res => {
      if (res.status !== 200) {
        localStorage.setItem("isAuthenticated", false);
      } else {
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("jwtToken", res.data.token);
        props.history.push("/celebrity-jokes");
      }
    })
    .catch(err => {
      console.log(err);
    });
}

function register(userInfo) {
  console.log("userInfo::::>>>>", userInfo);
  delete userInfo.user;
  const url = `${BASE_URL}/signup/manualsignup`;
  return axios
    .post(url, { user: userInfo })
    .then(res => {
      if (res.status === 200 && res.data.message === "The user was created") {
        return true;
      }
      return false;
    })
    .catch(err => {
        console.log("ERRROR!!!:::::>>", err);
        return err
    });
}

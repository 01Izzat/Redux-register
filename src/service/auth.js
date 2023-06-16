import axios from "./api";

const AuthService = {
  async userRegister(user) {
    const responce = await axios.post("/users", { user });

    return responce.data;
  },
  async userLogin() {},
  async getUser() {},
};

export default AuthService;

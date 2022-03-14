export default [
  ({ login }) => {
    if (!login) {
      return { login: "Login cannot be empty!" };
    }
    if (login.length < 5 || login.length > 20) {
      return {
        login:
          "The length of the login must be at least 5 characters and no more than 20",
      };
    }
    if ({ login }) {
      const enteredLogin = Array.from(login);
      const firstSymbol = enteredLogin[0];
      console.log(enteredLogin, firstSymbol);
      if (firstSymbol === firstSymbol.toUpperCase()) {
        return { login: "Login should be with a small letter" };
      }
    }
  },
  ({ password }) => {
    if (!password) {
      return { password: "Password cannot be empty!" };
    }
  },
];

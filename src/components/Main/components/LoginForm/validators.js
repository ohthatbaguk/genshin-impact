export default [
  ({ login }) => {
    if (!login) {
      return { login: ["Login cannot be empty!"] };
    }

    const loginErrors = [];

    if (login.length < 5 || login.length > 20) {
      loginErrors.push(
        "The length of the login must be at least 5 characters and no more than 20"
      );
    }

    const enteredLogin = Array.from(login);
    const firstSymbol = enteredLogin[0];
    if (firstSymbol === firstSymbol.toUpperCase()) {
      loginErrors.push("Login should start with a small letter");
    }
    return { login: loginErrors };
  },

  ({ password }) => {
    if (!password) {
      return { password: ["Password cannot be empty!"] };
    }
  },
];

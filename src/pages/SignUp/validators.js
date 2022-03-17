import validateEmail from "src/utils/validateEmail";

export default [
  ({ firstName }) => {
    if (!firstName) {
      return { firstName: ["First name cannot be empty!"] };
    }
  },

  ({ lastName }) => {
    if (!lastName) {
      return { lastName: ["Last name cannot be empty!"] };
    }
  },

  ({ login }) => {
    if (!login) {
      return { login: ["Login cannot be empty!"] };
    }
  },

  ({ password }) => {
    if (!password) {
      return { password: ["Password cannot be empty!"] };
    }
  },

  ({ repeatPassword, password }) => {
    if (repeatPassword !== password) {
      return {
        repeatPassword: ["Repeat password should be equal to password!"],
      };
    }
  },

  ({ age }) => {
    if (age < 18) {
      return { age: ["You are to young to sign up!"] };
    }
    if (age > 99) {
      return { age: ["You are to old to sign up!"] };
    }
  },

  ({ email }) => {
    if (!validateEmail(email)) {
      return { email: ["Email is invalid!"] };
    }
  },
];

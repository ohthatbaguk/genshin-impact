import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "src/services/localStorage";

export default function signUp(values) {
  let users = getFromLocalStorage("users");
  if (!Array.isArray(users)) {
    users = [];
  }

  if (users.find((item) => item.login === values.login)) {
    return "User already exist!";
  } else {
    const user = {
      age: values.age,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      login: values.login,
      password: values.password,
    };
    saveToLocalStorage("users", [...users, user]);
  }
}

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
    saveToLocalStorage("users", [...users, values]);
  }
}

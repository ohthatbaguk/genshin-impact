import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "src/services/localStorage";

export default function updateUser(values) {
  const users = getFromLocalStorage("users");

  const user = users.find((item) => item.login === values.login);
  user.firstName = values.firstName;
  user.lastName = values.lastName;
  user.age = values.age;
  user.email = values.email;

  saveToLocalStorage("users", users);
}

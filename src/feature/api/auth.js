import { getFromLocalStorage } from "src/services/localStorage";

export default function auth(values, key) {
  const data = getFromLocalStorage(key);
  const storedData = data.find((user) => user.login === values.login);

  if (values.login !== storedData.login) {
    return "User not found!";
  } else if (values.password !== storedData.password) {
    return "Invalid credentials!";
  } else {
    return "";
  }
}

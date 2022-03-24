import { getFromLocalStorage } from "src/services/localStorage";

export default function auth(values) {
  const data = getFromLocalStorage("users");

  const user = data?.find((user) => user.login === values.login);

  if (!user) return "User not found!";
  if (values.password !== user.password) return "Invalid credentials!";
}

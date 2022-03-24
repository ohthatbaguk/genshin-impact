import { getFromLocalStorage } from "src/services/localStorage";

export default function auth(values) {
  const data = getFromLocalStorage("users");

  const user = data?.find((user) => user.login === values.login);

  let error;
  if (!user) {
    error = "User not found!";
  } else if (values.password !== user.password) {
    error = "Invalid credentials!";
  }

  return { user, error };
}

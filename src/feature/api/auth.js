import { getFromLocalStorage } from "src/services/localStorage";

export default function auth(values) {
  const data = getFromLocalStorage("users");

  const fullUser = data?.find((user) => user.login === values.login);

  let error;
  if (!fullUser) {
    error = "User not found!";
  } else if (values.password !== fullUser.password) {
    error = "Invalid credentials!";
  }

  const user = {
    age: fullUser.age,
    email: fullUser.email,
    firstName: fullUser.firstName,
    lastName: fullUser.lastName,
    login: fullUser.login,
  };

  return { user, error };
}

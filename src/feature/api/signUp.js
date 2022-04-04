export default async function signUp(values) {
  const headers = { "Content-Type": "application/json" };

  const body = JSON.stringify({
    age: values.age,
    email: values.email,
    firstName: values.firstName,
    lastName: values.lastName,
    login: values.login,
    password: values.password,
  });

  const { error } = await fetch("http://localhost:3000/sign-up", {
    method: "POST",
    headers,
    body,
  }).then((r) => r.json());

  return error;
}

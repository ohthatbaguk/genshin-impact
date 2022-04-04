export default async function auth(values) {
  const headers = { "Content-Type": "application/json" };

  const body = JSON.stringify({
    login: values.login,
    password: values.password,
  });

  const { user, error } = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers,
    body,
  }).then((r) => r.json());

  return { user, error };
}

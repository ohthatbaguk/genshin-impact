import doApiRequest from "src/feature/api/doApiRequest";

export default async function auth(values) {
  const body = {
    login: values.login,
    password: values.password,
  };

  const { user, error } = await doApiRequest("login", body);

  return { user, error };
}

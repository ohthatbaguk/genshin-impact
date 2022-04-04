import doApiRequest from "src/feature/api/doApiRequest";

export default async function signUp(values) {
  const body = {
    age: values.age,
    email: values.email,
    firstName: values.firstName,
    lastName: values.lastName,
    login: values.login,
    password: values.password,
  };

  const { error } = await doApiRequest("sign-up", body);

  return error;
}

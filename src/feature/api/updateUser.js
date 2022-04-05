import doApiRequest from "src/feature/api/doApiRequest";

export default async function updateUser(values) {
  const body = {
    age: values.age,
    email: values.email,
    firstName: values.firstName,
    lastName: values.lastName,
    password: values.password,
  };

  const { error } = await doApiRequest("user", body, "PUT");

  return error;
}

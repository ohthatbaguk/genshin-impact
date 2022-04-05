import { getFromLocalStorage } from "src/services/localStorage";

export default async function doApiRequest(url, data, method = "POST") {
  const user = getFromLocalStorage("currentUser");
  const body = JSON.stringify(data);
  return await fetch(`http://localhost:3000/${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: user?.token ? `Bearer ${user?.token}` : null,
    },
    body,
  }).then((r) => r.json());
}

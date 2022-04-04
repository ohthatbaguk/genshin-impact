export default async function doApiRequest(url, data, method = "POST") {
  const body = JSON.stringify(data);
  return await fetch(`http://localhost:3000/${url}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body,
  }).then((r) => r.json());
}

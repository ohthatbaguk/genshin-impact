import { useEffect, useState } from "react";

export default function useGitHubZen() {
  const [zen, setZen] = useState(null);

  useEffect(() => {
    getGitHubZen().then(setZen);
  }, []);

  return zen;
}

const getGitHubZen = async () => {
  const response = await fetch("https://api.github.com/zen");
  return await response.text();
};

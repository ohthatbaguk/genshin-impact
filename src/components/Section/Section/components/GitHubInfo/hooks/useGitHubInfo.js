import { useEffect, useState } from "react";

export default function useGitHubInfo() {
  const [zen, setZen] = useState(null);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getGitHubZen().then(setZen);
  }, []);

  useEffect(() => {
    getGitHubInfo().then(setInfo);
  }, []);

  return { zen, info };
}

const getGitHubZen = async () => {
  const response = await fetch("https://api.github.com/zen");
  return await response.text();
};

const getGitHubInfo = async () => {
  const response = await fetch("https://api.github.com/users/ohthatbaguk");
  return await response.json();
};

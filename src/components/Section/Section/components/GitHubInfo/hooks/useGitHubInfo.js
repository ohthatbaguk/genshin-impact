import { useEffect, useState } from "react";

export default function useGitHubInfo() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    getGitHubInfo().then(setInfo);
  }, []);

  return info;
}

const getGitHubInfo = async () => {
  const response = await fetch("https://api.github.com/users/ohthatbaguk");
  return await response.json();
};

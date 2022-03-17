import { useState } from "react";

export default function useOpenClose() {
  const [loading, setLoad] = useState(false);

  const startLoading = () => {
    setLoad(true);
  };

  const endLoading = () => {
    setLoad(false);
  };

  return { loading, startLoading, endLoading };
}

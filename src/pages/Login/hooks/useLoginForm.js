import { getFromLocalStorage } from "src/services/localStorage";
import { useState } from "react";

export default function useLoginForm(key) {
  const localData = getFromLocalStorage(key);
  const [error, setError] = useState("");

  const onSubmit = (values) => {
    if (values.login !== localData.login) {
      setError("User not found!");
    } else if (values.password !== localData.password) {
      setError("Invalid credentials!");
    } else {
      setError("");
    }
  };

  return { error, onSubmit };
}

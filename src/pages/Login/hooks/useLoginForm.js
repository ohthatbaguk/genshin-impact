import { getFromLocalStorage } from "src/services/localStorage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLoginForm(key) {
  const localData = getFromLocalStorage(key);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const storedData = localData.find((user) => user.login === values.login);

    if (values.login !== storedData.login) {
      setError("User not found!");
    } else if (values.password !== storedData.password) {
      setError("Invalid credentials!");
    } else {
      setError("");
      navigate("/");
    }
  };

  return { error, onSubmit };
}

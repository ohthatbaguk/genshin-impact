import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "src/feature/api/auth";
import { saveToLocalStorage } from "src/services/localStorage";

export default function useLoginForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const { user, error } = auth(values);

    if (error) {
      setError(error);
      return;
    }
    saveToLocalStorage("currentUser", user);
    navigate("/");
  };

  return { error, onSubmit };
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUp from "src/feature/api/signUp";

export default function useSignUpForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const result = signUp(values);

    if (result) {
      setError(result);
      return;
    }
    navigate("/login");
  };

  return { error, onSubmit };
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUp from "src/feature/api/signUp";

export default function useSignUpForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const result = await signUp(values);

    if (result) {
      setError(result);
      return;
    }
    navigate("/login");
  };

  return { error, onSubmit };
}

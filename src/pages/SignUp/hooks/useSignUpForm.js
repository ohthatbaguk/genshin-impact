import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUp from "src/feature/api/signUp";
import useOpenClose from "src/hooks/useOpenClose";

export default function useSignUpForm() {
  const { loading, startLoading, endLoading } = useOpenClose();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    startLoading();
    const result = await signUp(values);
    endLoading();

    if (result) {
      setError(result);
      return;
    }
    navigate("/login");
  };

  return { error, onSubmit, loading };
}

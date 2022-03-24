import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "src/feature/api/auth";

export default function useLoginForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const result = auth(values, "users");

    if (!result) {
      navigate("/");
    } else {
      setError(result);
    }
  };

  return { error, onSubmit };
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "src/feature/api/auth";
import { saveToLocalStorage } from "src/services/localStorage";
import useOpenClose from "src/hooks/useOpenClose";

export default function useLoginForm() {
  const [error, setError] = useState("");
  const { loading, startLoading, endLoading } = useOpenClose();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    startLoading();
    const { user, error, token } = await auth(values);
    endLoading();

    if (error) {
      setError(error);
      return;
    }

    user.token = token;
    saveToLocalStorage("currentUser", user);
    navigate("/");
  };

  return { error, onSubmit, loading };
}

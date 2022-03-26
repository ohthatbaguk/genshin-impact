import { useState } from "react";

export default function useForm(initialState = {}, validators = [], onSubmit) {
  const [values, setValues] = useState(initialState);
  const { errors, isValid } = validate(values, validators);
  const [isTouched, setTouched] = useState({});

  const changeHandler = (e) => {
    const newValues = { ...values, [e.target.name]: e.target.value };
    setValues(newValues);
    const newTouched = { ...isTouched, [e.target.name]: true };
    setTouched(newTouched);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return { values, changeHandler, errors, isValid, isTouched, handleSubmit };
}

function validate(values, validators) {
  const errors = validators
    .map((validator) => validator(values))
    .filter((item) => typeof item === "object")
    .reduce((errors, error) => ({ ...errors, ...error }), {});

  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
}

import { Provider, useForm } from "src/feature/form";

export default function Form({
  initialData = {},
  children,
  onSubmit,
  validators,
  className,
}) {
  const { values, changeHandler, errors, isTouched, handleSubmit, isValid } =
    useForm(initialData, validators, onSubmit);
  return (
    <form className={className} onSubmit={handleSubmit}>
      <Provider value={{ values, errors, isTouched, changeHandler, isValid }}>
        {children}
      </Provider>
    </form>
  );
}

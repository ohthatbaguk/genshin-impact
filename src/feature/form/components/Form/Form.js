import { Provider, useForm } from "src/feature/form";

export default function Form({ children, onSubmit, validators, className }) {
  const { values, changeHandler, errors, isTouched, handleSubmit, isValid } =
    useForm({}, validators, onSubmit);
  return (
    <form className={className} onSubmit={handleSubmit}>
      <Provider value={{ values, errors, isTouched, changeHandler, isValid }}>
        {children}
      </Provider>
    </form>
  );
}

import { Navigate, Route, Routes } from "react-router-dom";
import { Home, LoginForm, SignUpForm } from "src/pages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/sign-up" element={<SignUpForm />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;

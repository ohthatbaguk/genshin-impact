import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "src/pages/Home";
import { LoginForm } from "src/pages/Login";
import { SignUpForm } from "src/pages/SignUp";

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

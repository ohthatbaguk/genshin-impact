import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "src/pages/Login/LoginForm/LoginForm";
import SignUpForm from "src/pages/SignUpForm/SignUpForm";
import Home from "src/pages/Home/Home";

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

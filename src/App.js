import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "src/pages/Login";
import { SignUpForm } from "src/pages/SignUp";
import Profile from "src/pages/Profile/Profile";
import EditProfile from "src/pages/EditProfile/EditProfile";
import { Home } from "src/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/sign-up" element={<SignUpForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;

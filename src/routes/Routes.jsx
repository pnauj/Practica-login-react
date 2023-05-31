import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../components/home/Home";
import SignUp from "../components/signup/Signup";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exacth path="/" element={<Home />} />
        <Route exacth path="/login" element={<Login />} />
        <Route exacth path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../components/home/Home";
import SignUp from "../components/signup/Signup";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

export default function MyRoutes() {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exacth path="/" element={<Home name={userName} />} />
        <Route exacth path="/login" element={<Login />} />
        <Route exacth path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

import "./App.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Register from "./pages/Register.jsx";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import authAPI from "./API/authAPI.js";
import axios from "axios";
import AuthContext from "./contexts/auth.context.js";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessTokenApplicant");

    if (accessToken) {
      axios.defaults.headers["Authorization"] = "Bearer " + accessToken;
      authAPI.getProfile().then((result) => {
        console.log(result);
        if (result.isSuccess) {
          setUser(result.data);
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div style={{ position: "relative" }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>
          </Route>

          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = "http://localhost:5173/login";
        return;
      }
      try {
        const { data } = await axios.post(
          "http://localhost:3002/",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) {
          setUsername(user);
        } else {
          removeCookie("token");
          window.location.href = "http://localhost:5173/login";
        }
      } catch (err) {
        removeCookie("token");
        window.location.href = "http://localhost:5173/login";
      }
    };
    verifyCookie();
  }, [cookies, removeCookie]);

  const handleLogout = () => {
    removeCookie("token", { path: "/", domain: "localhost" });
    window.location.href = "http://localhost:5173/login";
  };

  return (
    <>
      <TopBar username={username} onLogout={handleLogout} />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
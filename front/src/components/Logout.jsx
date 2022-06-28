import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../context/jwtContext";
import "./Logout.scss"

const Logout = () => {
    const { setJwt } = useContext(JwtContext);
    const navigate = useNavigate();
    
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setJwt(null);
    navigate("/logs");
  };
  return (
    <div><button onClick={logout} className="logout">Logout</button></div>
  )
}

export default Logout
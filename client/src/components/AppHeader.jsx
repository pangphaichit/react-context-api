import React, { useContext } from "react";
import { UserNameContext } from "../App.jsx";

function AppHeader() {
  const userData = useContext(UserNameContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userData.username}</h2>
    </div>
  );
}

export default AppHeader;

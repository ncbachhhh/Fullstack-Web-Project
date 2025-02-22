import React from "react";
import LoginLeft from "../components/Login/LoginLeft/LoginLeft.jsx";
import LoginRight from "../components/Login/LoginRight/LoginRight.jsx";
import { notification } from "antd";

export default function Login() {
  const [api, contextHolder] = notification.useNotification();
  return (
    <div className="login-container" style={{ display: "flex", overflow: "hidden" }}>
      {contextHolder}
      <LoginLeft api={api} />
      <LoginRight />
    </div>
  );
}

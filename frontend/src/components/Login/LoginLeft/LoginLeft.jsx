import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginLeft.css";
import { useForm } from "react-hook-form";
import authAPI from "../../../API/authAPI";


export default function LoginLeft(props) {
  const { api } = props;
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginSubmit = async (data) => {
    const result = await authAPI.login(data);
    if (!result.isSuccess) {
      api.error({ message: "Login failed", description: result.message });
    } else {
      api.success({
        message: "Login successfully",
        description: "You'll be redirected to homepage",
      });
      navigate("/");
    }
  };

  return (
    <div className="login-left-container">
      <div className="login-left-title">
        <p>Chào mừng bạn đã quay trở lại</p>
        <p>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
      </div>
      <form className="loginForm" onSubmit={handleSubmit(onLoginSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <i className="fa-solid fa-envelope" style={{ marginRight: "10px", color: "#00b14f" }}></i>
              <input
                type="text"
                id="email"
                style={{ width: "95%" }}
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
          </div>
          {errors.email && <p style={{ color: "red" }}>* {errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <i className="fa-solid fa-user-lock" style={{ marginRight: "10px", color: "#00b14f" }}></i>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                style={{ width: "93%" }}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                    message: "Password must contain at least one lowercase letter, one uppercase letter, and one number",
                  },
                })}
              />
            </div>
            <div>
              <i className="fa-solid fa-eye" style={{ display: showPassword ? "none" : "inline-block", color: "#00b14f" }} onClick={() => setShowPassword(true)}></i>
              <i className="fa-solid fa-eye-slash" style={{ display: !showPassword ? "none" : "inline-block", color: "#00b14f" }} onClick={() => setShowPassword(false)}></i>
            </div>
          </div>
          {errors.password && <p style={{ color: "red" }}>* {errors.password.message}</p>}
        </div>
        <NavLink to="/auth/forgot-password" style={{ textAlign: "end", color: "#00b14f", textDecoration: "none", fontSize: "14px" }}>
          Quên mật khẩu
        </NavLink>
        <button type="submit" className="login_page_btn">
          Đăng nhập
        </button>
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{
            color: "#4d5965",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
          }}
        >
          Bạn chưa có tài khoản?{" "}
          <NavLink to="/auth/register" style={{ color: "#00b14f" }}>
            Đăng ký ngay
          </NavLink>
        </p>
      </div>
    </div>
  );
}

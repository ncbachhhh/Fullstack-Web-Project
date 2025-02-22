import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function RegisterLeft() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-left-container">
      <div className="login-left-title">
        <p>Chào mừng bạn đến với TopCV</p>
        <p>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
      </div>
      <form className="loginForm" onSubmit={handleSubmit(onRegisterSubmit)}>
        <div>
          <label htmlFor="fullname">Fullname</label>
          <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <i className="fa-solid fa-user" style={{ marginRight: "10px", color: "#00b14f" }}></i>
              <input
                type="text"
                id="fullname"
                style={{ width: "95%" }}
                placeholder="Fullname"
                {...register("fullname", {
                  required: "Fullname is required",
                  minLength: { value: 5, message: "Fullname must be at least 5 characters" },
                })}
              />
            </div>
          </div>
          {errors.fullname && <p style={{ color: "red" }}>* {errors.fullname.message}</p>}
        </div>
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
                  minLength: { value: 8, message: "Password must be at least 8 characters" },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                    message: "Password must contain at least one lowercase letter, one uppercase letter, and one number",
                  },
                })}
              />
            </div>
            <div>
              <i className="fa-solid fa-eye" style={{ display: showPassword2 ? "none" : "inline-block", color: "#00b14f" }} onClick={() => setShowPassword2(true)}></i>
              <i className="fa-solid fa-eye-slash" style={{ display: !showPassword2 ? "none" : "inline-block", color: "#00b14f" }} onClick={() => setShowPassword2(false)}></i>
            </div>
          </div>
          {errors.password && <p style={{ color: "red" }}>* {errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="re-password">Re-Password</label>
          <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <i className="fa-solid fa-user-lock" style={{ marginRight: "10px", color: "#00b14f" }}></i>
              <input
                type={showPassword ? "text" : "password"}
                id="re-password"
                style={{ width: "93%" }}
                placeholder="Re-Password"
                {...register("repassword", {
                  required: "Repassword is required",
                  validate: (value) => value === document.getElementById("password").value || "Passwords do not match",
                })}
              />
            </div>
            <div>
              <i className="fa-solid fa-eye" style={{ display: showPassword ? "none" : "inline-block", color: "#00b14f" }} onClick={() => setShowPassword(true)}></i>
              <i className="fa-solid fa-eye-slash" style={{ display: !showPassword ? "none" : "inline-block", color: "#00b14f" }} onClick={() => setShowPassword(false)}></i>
            </div>
          </div>
          {errors.repassword && <p style={{ color: "red" }}>* {errors.repassword.message}</p>}
        </div>
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
          Bạn đã có tài khoản?{" "}
          <NavLink to="/auth/login" style={{ color: "#00b14f" }}>
            Đăng nhập ngay
          </NavLink>
        </p>
      </div>
    </div>
  );
}

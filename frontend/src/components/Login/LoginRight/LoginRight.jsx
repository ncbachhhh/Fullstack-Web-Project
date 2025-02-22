import React from "react";
import "./LoginRight.css";
export default function LoginRight() {
  return (
    <div className="login-right-container">
      <div className="">
        <img src="https://static.topcv.vn/v4/image/auth/topcv_white.png" alt="" width={160} />
        <div className="login-title">
          <h1>
            Tiếp lợi thế <br /> Nối thành công
          </h1>
          <p>
            TopCV- Hệ sinh thái nhân sự tiên <br/> phong ứng dụng công nghệ tại Việt Nam
          </p>
        </div>
      </div>
      <div className="arrow-login-bg"></div>
    </div>
  );
}

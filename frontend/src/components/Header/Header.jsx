import { Button, Flex, Typography } from "antd";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const loginCheck = false;
  const notiCount = 1;

  const [flip, setFlip] = useState(false);
  const [selectHeader, setSelectHeader] = useState(1);

  return (
    <Flex justify="space-between" style={{ padding: "0 24px", height: "10vh" }}>
      <Flex>
        <img src="https://static.topcv.vn/v4/image/logo/topcv-logo-6.png" alt="logo" style={{ padding: "0px 20px 0 0" }} />
        <Flex align="center" style={{ padding: "0 20px", fontWeight: "600", color: "#212f3f" }}>
          <NavLink className={selectHeader === 1 ? "active-nav-link-header nav-link-header" : "nav-link-header"} onClick={() => setSelectHeader(1)}>
            Việc làm
          </NavLink>
        </Flex>
        <Flex align="center" style={{ padding: "0 20px", fontWeight: "600", color: "#212f3f" }}>
          <NavLink className={selectHeader === 2 ? "active-nav-link-header nav-link-header" : "nav-link-header"} onClick={() => setSelectHeader(2)}>
            Hồ sơ & CV
          </NavLink>
        </Flex>
        <Flex align="center" style={{ padding: "0 20px", fontWeight: "600", color: "#212f3f" }}>
          <NavLink className={selectHeader === 3 ? "active-nav-link-header nav-link-header" : "nav-link-header"} onClick={() => setSelectHeader(3)}>
            Cẩm nang nghề nghiệp
          </NavLink>
        </Flex>
        <Flex align="center" style={{ padding: "0 20px", fontWeight: "600", color: "#212f3f" }}>
          <NavLink className={selectHeader === 4 ? "active-nav-link-header nav-link-header" : "nav-link-header"} onClick={() => setSelectHeader(4)}>
            Top CV
          </NavLink>
        </Flex>
      </Flex>
      {loginCheck ? (
        <Flex>
          <Flex vertical align="start" justify="center" style={{ padding: "0 20px" }}>
            <Typography.Text style={{ color: "#7f878f", fontSize: "12px", fontWeight: "400" }}>Bạn là nhà tuyển dụng?</Typography.Text>
            <Link>
              <Typography.Text style={{ color: "#263a4d", fontSize: "14px", fontWeight: "600", color: "#00b14f" }}>Đăng tuyển ngay</Typography.Text>
            </Link>
          </Flex>
          <Flex align="center" justify="center" gap={20}>
            <div className="notificationContainer">
              <i class="fa-solid fa-bell"></i>
              <span className="notiCount">{notiCount}</span>
            </div>
            <div className="profileContainer" onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)}>
              <img src="https://www.topcv.vn/images/avatar-default.jpg" style={{ width: "32px", borderRadius: "50%" }}></img>
              <i className="fa-solid fa-chevron-down" style={flip ? { transform: "scaleY(-1)", transition: "0.5s" } : { transform: "scaleY(1)", transition: "0.5s" }}></i>
            </div>
          </Flex>
        </Flex>
      ) : (
        <Flex gap={20} align="center">
          <Button size="large" className="login_btn" >Đăng nhập</Button>
          <Button size="large" className="signup_btn">Đăng kí</Button>
          <Button size="large" className="company_btn">Đăng tuyển & tìm hồ sơ</Button>
        </Flex>
      )}
    </Flex>
  );
}

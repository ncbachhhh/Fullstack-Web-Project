import React from "react";
import "./Hotline.css";
import dataHotline from "./Hotline.data.js";

export default function Hotline() {
  return (
    <div className="hotlineContainer">
      <div className="wrap-box-hotline">
        <h2 className="hotline-title">Hotline tư vấn</h2>
        <div className="hotline-tab">
          <ul className="nav">
            <li className="nav-item active-hotline-nav">
              <p>Dành cho người tìm việc</p>
            </li>
            <li className="nav-item">
              <p>Dành cho người tuyển dụng</p>
            </li>
          </ul>
          <div className="tab-content-container">
            <div className="tab-content-1">
              <div className="tab-content-1-left">
                <h1 className="tab-content-title">
                  Tìm việc khó <span>đã có TopCV</span>
                </h1>
                <div className="tab-content-phone">
                  <p>(024) 6680 5588</p>
                  <a href="tel:024 6680 5588">
                    <i className="fa-solid fa-phone"></i> Gọi ngay
                  </a>
                </div>
                <div className="tab-content-email">
                  <span style={{ color: "#4d5965", fontSize: "16px", fontStyle: "normal", fontWeight: "600", lineHeight: "24px" }}>Email hỗ trợ ứng viên: </span>
                  <span>
                    <i className="fa-solid fa-envelope tab-content-icon"></i>
                    <a href="mailto:hotro@topcv.vn" className="tab-content-a-email">
                      hotro@topcv.vn
                    </a>
                  </span>
                </div>
              </div>
              <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/job-new/hotline.png" className="img-tab-content"/>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

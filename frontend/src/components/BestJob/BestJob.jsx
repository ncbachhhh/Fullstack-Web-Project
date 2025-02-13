import React, { useState } from "react";
import "./BestJob.css";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

export default function BestJob() {
  const [flip, setFlip] = useState(false);

  const [currentLocation1, setLocation1] = useState("Địa điểm");
  const locationItem1 = {
    label: `${currentLocation1}`,
    children: [
      {
        label: "Địa điểm",
      },
      {
        label: "Mức lương",
      },
      {
        label: "Kinh nghiệm",
      },
      {
        label: "Ngành nghề",
      },
    ],
  };

  const locationItem2 = ["Ngẫu nhiên", "Hà Nội", "Thành phố Hồ Chí Minh", "Miền Bắc", "Miền Nam"];
  const [currentLocation2, setLocation2] = useState(locationItem2[0]);

  return (
    <div className="bestJobContainer">
      <div className="headerBestJob">
        <div className="titleBestJob">
          <h2>Việc làm tốt nhất</h2>
          <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/feature-job/label-toppy-ai.png" alt="" style={{ height: "30px" }} />
        </div>
        <NavLink style={{ color: "black" }}>Xem tất cả</NavLink>
      </div>
      <div className="filterLocationBestJob">
        <div style={{ display: "flex", width: "275px", justifyContent: "space-between", border: "1px solid #dee0e2", padding: "10px", borderRadius: "10px" }} onClick={() => setFlip(!flip)}>
          <span style={{ display: "flex", gap: "10px" }}>
            <i className="fa-solid fa-filter" style={{ color: "#a6acb2" }}></i>
            <span>
              <span style={{ color: "#a6acb2" }}>Lọc theo: </span> {locationItem1.label}
            </span>
          </span>
          <span>
            <i className="fa-solid fa-chevron-down" style={flip ? { transform: "scaleY(-1)", transition: "0.5s" } : { transform: "scaleY(1)", transition: "0.5s" }}></i>
          </span>
          <div className="selectLocation" style={{ display: flip ? "flex" : "none" }}>
            {locationItem1.children.map((item) => {
              return (
                <>
                  <p onClick={() => setLocation1(item.label)} className={currentLocation1 === item.label ? "locationActive" : ""} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>{item.label}</span> <i className="fa-solid fa-check" style={{ display: currentLocation1 === item.label ? "block" : "none" }}></i>
                  </p>
                </>
              );
            })}
          </div>
        </div>
        <div className="locationButtonContainer">
          {locationItem2.map((item) => {
            return (
              <button className={currentLocation2 === item ? "locationButton active" : "locationButton"} onClick={() => setLocation2(item)}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

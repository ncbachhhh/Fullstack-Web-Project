import React, { useState } from "react";
import "./ProCompany.css";

export default function ProCompany() {
  const [currentSpecialization, setCurrentSpecialization] = useState("Tất cả");
  const specialization = [
    {
      name: "Tất cả",
    },
    {
      name: "Ngân hàng",
    },
    {
      name: "Bất động sản",
    },
    {
      name: "Xây dựng",
    },
    {
      name: "IT - Phần mềm",
    },
    {
      name: "Tài chính",
    },
  ];
  const dataCompany = [
    {
      image: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/qTLn1vKAWroQxRe0OfdD.jpg",
      name: "Công ty TNHH Phân Phối SYNNEX FPT",
      specialization: "IT",
      count: 11,
    },
    {
      image: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/qTLn1vKAWroQxRe0OfdD.jpg",
      name: "Công ty TNHH Phân Phối SYNNEX FPT",
      specialization: "IT",
      count: 11,
    },
    {
      image: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/qTLn1vKAWroQxRe0OfdD.jpg",
      name: "Công ty TNHH Phân Phối SYNNEX FPT",
      specialization: "IT",
      count: 11,
    },
    {
      image: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/qTLn1vKAWroQxRe0OfdD.jpg",
      name: "Công ty TNHH Phân Phối SYNNEX FPT",
      specialization: "IT",
      count: 11,
    },
    {
      image: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/qTLn1vKAWroQxRe0OfdD.jpg",
      name: "Công ty TNHH Phân Phối SYNNEX FPT",
      specialization: "IT",
      count: 11,
    },
    {
      image: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/qTLn1vKAWroQxRe0OfdD.jpg",
      name: "Công ty TNHH Phân Phối SYNNEX FPT",
      specialization: "IT",
      count: 11,
    },
    {
      image: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/qTLn1vKAWroQxRe0OfdD.jpg",
      name: "Công ty TNHH Phân Phối SYNNEX FPT",
      specialization: "IT",
      count: 11,
    },
    {
      image: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/qTLn1vKAWroQxRe0OfdD.jpg",
      name: "Công ty TNHH Phân Phối SYNNEX FPT",
      specialization: "IT",
      count: 11,
    },
    {
      image: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/qTLn1vKAWroQxRe0OfdD.jpg",
      name: "Công ty TNHH Phân Phối SYNNEX FPT",
      specialization: "IT",
      count: 11,
    },
  ];
  return (
    <div className="ProCompanyContainer">
      <div className="wrap-box-company">
        <div className="banner-title">
          <h2>Thương hiệu lớn tiêu biểu</h2>
          <p>Những thương hiệu tuyển dụng đã khẳng định được vị thế trên thị trường</p>
        </div>
        <div className="filter-company-container">
          {specialization.map((item) => {
            return (
              <button className={currentSpecialization === item.name ? "locationButton active" : "locationButton"} onClick={() => setCurrentSpecialization(item.name)}>
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="company-list-container">
          {dataCompany.map((item) => {
            return (
              <div className="company-list-item">
                <div className="company-top-div">
                  <div className="company-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="company-title">
                    <h2 className="company-name">{item.name}</h2>
                    <p className="company-specialization">{item.specialization}</p>
                  </div>
                </div>
                <div className="company-bot-div">
                  <i className="fa-solid fa-briefcase"></i>
                  <p className="job-count-company">{item.count} việc làm</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

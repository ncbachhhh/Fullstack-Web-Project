import React from "react";
import "./TopJob.css";

export default function TopJob() {
  const specialization = [
    {
      name: "Kinh doanh - Bán hàng",
      image: "https://www.topcv.vn/v4/image/welcome/top-categories/kinh-doanh-ban-hang.png?v=2",
    },
    {
      name: "Marketing - Quảng cáo",
      image: "https://www.topcv.vn/v4/image/welcome/top-categories/marketing-truyen-thong-quang-cao.png?v=2",
    },
    {
      name: "Chăm sóc khách hàng",
      image: "https://www.topcv.vn/v4/image/welcome/top-categories/dich-vu-khach-hang.png?v=2",
    },
    {
      name: "Nhân sự - Hành chính",
      image: "https://www.topcv.vn/v4/image/welcome/top-categories/hanh-chinh-van-phong.png?v=2",
    },
    {
      name: "Tài chính - Ngân hàng",
      image: "https://www.topcv.vn/v4/image/welcome/top-categories/ngan-hang-tai-chinh.png?v=2",
    },
    {
      name: "Công nghệ Thông tin",
      image: "https://www.topcv.vn/v4/image/welcome/top-categories/cong-nghe-thong-tin.png?v=2",
    },
    {
      name: "Bất động sản - Xây dựng",
      image: "https://www.topcv.vn/v4/image/welcome/top-categories/bat-dong-san.png?v=2",
    },
    {
      name: "Kế toán - Thuế",
      image: "https://www.topcv.vn/v4/image/welcome/top-categories/ke-toan-kiem-toan.png?v=2",
    },
  ];

  return (
    <div className="TopJobContainer">
      <div className="box-wrap-top-job">
        <div className="top-job-title">
          <h1>Top ngành nghề nổi bật</h1>
        </div>
        <div className="top-job-list-container">
          {specialization.map((item) => {
            return (
              <div className="top-job-item">
                <div className="top-job-image">
                  <img src={item.image} alt="" />
                </div>
                <h3 className="top-job-name">{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

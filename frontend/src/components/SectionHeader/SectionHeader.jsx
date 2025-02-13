import React from "react";
import "./SectionHeader.css";
import { Button, Flex, Input } from "antd";

export default function SectionHeader() {
  const JobCategories = ["Kinh doanh/Bán hàng", "Marketing/PR/Quảng cáo", "Chăm sóc khách hàng", "Nhân sự/Hành chính/Pháp chế", "Tài chính/Ngân hàng/Bảo hiểm", "Công nghệ thông tin", "Bất động sản/Xây dựng", "Sản xuất"];
  return (
    <div className="SectionHeaderContainer">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 className="title-home">Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc</h1>
        <span className="descript-home">
          Tiếp cận <span className="descript-highlight">40,000+</span> tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam
        </span>
      </div>
      <Flex className="categoriesFilter" align="center" gap={15}>
        <Button shape="round" size="large" className="buttonCategoriesFilter">
          <i class="fa-solid fa-list-ul"></i>
          <span className="jobCategoriesFilter">Danh mục nghề</span>
        </Button>
        <Input size="large" placeholder="Vị trí tuyển dụng, tên công ty" className="input_search_home" />
        <Button size="large" shape="round" className="location_filter" style={{ display: "flex", justifyContent: "space-between", width: "280px" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            <i class="fa-solid fa-location-dot"></i>
            <span>Địa điểm</span>
          </div>
          <i class="fa-solid fa-chevron-down"></i>
        </Button>
        <Button size="large" shape="round" style={{ backgroundColor: "#00b14f" }}>
          <i style={{ color: "white" }} className="fa-solid fa-magnifying-glass"></i>
          <span style={{ color: "white" }}>Tìm kiếm</span>
        </Button>
      </Flex>
      <Flex style={{}} gap={20}>
        <ul className="listJobCategories">
          {JobCategories.map((item) => {
            return (
              <li className="jobItem">
                <span>{item}</span>
                <i className="fa-solid fa-angle-right"></i>
              </li>
            );
          })}
        </ul>
        <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/banners/VskAeWLmt7IzGeserkrX.jpg" alt="" style={{ height: "80%", borderRadius: "20px" }} />
      </Flex>
    </div>
  );
}

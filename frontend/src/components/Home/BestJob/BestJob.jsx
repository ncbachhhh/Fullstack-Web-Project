import React, { useState } from "react";
import "./BestJob.css";
import { NavLink } from "react-router-dom";
import { Button, Flex, Pagination, Typography } from "antd";

export default function BestJob(props) {
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

  const JobList = [
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/uiUagrtwGOe6txKPC9WcLvjqmkieHCjt_1678353643____fbd48934604657192299334197f9f58e.jpg",
      salary: "5tr",
      city: "Hà Nội",
    },
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/vnf9H5G5ShqwmE7LgCnTF3W9KazJvewP_1665808733____d8153d937798bb4260b7e33fe09f81d0.png",
      salary: "5tr",
      city: "Hà Nội",
    },
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/uiUagrtwGOe6txKPC9WcLvjqmkieHCjt_1678353643____fbd48934604657192299334197f9f58e.jpg",
      salary: "5tr",
      city: "Hà Nội",
    },
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/vnf9H5G5ShqwmE7LgCnTF3W9KazJvewP_1665808733____d8153d937798bb4260b7e33fe09f81d0.png",
      salary: "5tr",
      city: "Hà Nội",
    },
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/uiUagrtwGOe6txKPC9WcLvjqmkieHCjt_1678353643____fbd48934604657192299334197f9f58e.jpg",
      salary: "5tr",
      city: "Hà Nội",
    },
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/vnf9H5G5ShqwmE7LgCnTF3W9KazJvewP_1665808733____d8153d937798bb4260b7e33fe09f81d0.png",
      salary: "5tr",
      city: "Hà Nội",
    },
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/uiUagrtwGOe6txKPC9WcLvjqmkieHCjt_1678353643____fbd48934604657192299334197f9f58e.jpg",
      salary: "5tr",
      city: "Hà Nội",
    },
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/vnf9H5G5ShqwmE7LgCnTF3W9KazJvewP_1665808733____d8153d937798bb4260b7e33fe09f81d0.png",
      salary: "5tr",
      city: "Hà Nội",
    },
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/uiUagrtwGOe6txKPC9WcLvjqmkieHCjt_1678353643____fbd48934604657192299334197f9f58e.jpg",
      salary: "5tr",
      city: "Hà Nội",
    },
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/vnf9H5G5ShqwmE7LgCnTF3W9KazJvewP_1665808733____d8153d937798bb4260b7e33fe09f81d0.png",
      salary: "5tr",
      city: "Hà Nội",
    },
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/uiUagrtwGOe6txKPC9WcLvjqmkieHCjt_1678353643____fbd48934604657192299334197f9f58e.jpg",
      salary: "5tr",
      city: "Hà Nội",
    },
    {
      title: "Nhân viên Digital Marketing",
      company: "Công ty ABC",
      company_image: "https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/vnf9H5G5ShqwmE7LgCnTF3W9KazJvewP_1665808733____d8153d937798bb4260b7e33fe09f81d0.png",
      salary: "5tr",
      city: "Hà Nội",
    },
  ];

  return (
    <div className="bestJobContainer">
      <div className="headerBestJob">
        <div className="titleBestJob">
          <h2>Việc làm tốt nhất</h2>
          <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/feature-job/label-toppy-ai.png" alt="" style={{ height: "30px" }} />
        </div>
        <NavLink style={{ color: "black", fontSize: "13px", fontWeight: "500", lineHeight: "19px" }} className="viewAllBestJob">
          Xem tất cả
        </NavLink>
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
      <div className="bestJobList">
        {JobList.map((item) => {
          return (
            <Flex vertical justify="space-between" className="bestJobItem" gap={10}>
              <Flex gap={15}>
                <img src={item.company_image} className="bestJobItemImg"></img>
                <Flex vertical>
                  <Typography className="bestJobItemTitle">{item.title}</Typography>
                  <Typography className="bestJobItemCompany">{item.company}</Typography>
                </Flex>
              </Flex>
              <Flex justify="space-between">
                <Flex gap={5}>
                  <Button shape="round" className="salary_location_btn">
                    {item.salary}
                  </Button>
                  <Button shape="round" className="salary_location_btn">
                    {item.city}
                  </Button>
                </Flex>
                <div className="like_job_btn">
                  <i className="fa-regular fa-heart"></i>
                </div>
              </Flex>
            </Flex>
          );
        })}
      </div>
    </div>
  );
}

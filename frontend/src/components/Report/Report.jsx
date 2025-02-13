import React from "react";
import "./Report.css";

export default function Report(props) {
  const { showModelReport, setShowModelReport } = props;
  return (
    <div
      className="reportContainer"
      onClick={() => {
        setShowModelReport(!showModelReport);
        console.log(showModelReport);
      }}
    >
      <div className="reportItem">
        <div>
          <i className="fa-solid fa-comment" style={{ fontSize: "18px" }}></i>
          <p>Góp ý</p>
        </div>
      </div>
    </div>
  );
}

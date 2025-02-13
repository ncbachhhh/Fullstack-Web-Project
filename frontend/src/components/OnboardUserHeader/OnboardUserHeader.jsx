import React from "react";
import { Button, Flex, Typography } from "antd";
import { Link } from "react-router-dom";

export default function OnboardUserHeader() {
  return (
    <Flex align="center" justify="center" style={{ padding: "23px", height: "46px", backgroundImage: "url(https://static.topcv.vn/v4/image/onboard-user/bg-onboard-header.png)" }}>
      <Typography style={{  fontWeight: "600" }}>
        Hãy chia sẻ nhu cầu công việc để nhận gợi ý việc làm tốt nhất{" "}
        <Button shape="round" style={{ backgroundColor: "#0c8453", color: "white" }}>
          <Link style={{ color: "white" }}>Cập nhật nhu cầu công việc <i class="fa-solid fa-arrow-right" ></i></Link>
        </Button>
      </Typography>
    </Flex>
  );
}

import React, { useState } from "react";
import SectionHeader from "../components/Home/SectionHeader/SectionHeader.jsx";
import BestJob from "../components/Home/BestJob/BestJob.jsx";
import { useSearchParams } from "react-router-dom";
import ProCompany from "../components/Home/ProCompany/ProCompany.jsx";
import TopJob from "../components/Home/TopJob/TopJob.jsx";
import Hotline from "../components/Hotline/Hotline.jsx";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") ?? 1;

  const [jobData, setJobData] = useState({
    jobs: [],
    total: 0,
  });

  return (
    <>
      <SectionHeader />
      <BestJob />
      <ProCompany />
      <TopJob />
      <Hotline />
    </>
  );
}

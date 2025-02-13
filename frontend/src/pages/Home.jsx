import React, { useState } from "react";
import OnboardUserHeader from "../components/OnboardUserHeader/OnboardUserHeader.jsx";
import Header from "../components/Header/Header.jsx";
import Report from "../components/Report/Report.jsx";
import ModalReport from "../components/ModalReport/ModalReport.jsx";
import SectionHeader from "../components/SectionHeader/SectionHeader.jsx";
import BestJob from "../components/BestJob/BestJob.jsx";

export default function Home() {
  const [showModelReport, setShowModelReport] = useState(false);
  return (
    <>
      <OnboardUserHeader />
      <Header />
      {/* <Report showModelReport={showModelReport} setShowModelReport={setShowModelReport}/> */}
      {/* <ModalReport /> */}
      <SectionHeader />
      <BestJob />
    </>
  );
}

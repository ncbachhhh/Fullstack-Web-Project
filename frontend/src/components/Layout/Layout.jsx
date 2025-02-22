import React from "react";
import OnboardUserHeader from "./OnboardUserHeader/OnboardUserHeader";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <OnboardUserHeader />
      <Header />
      <Outlet />
    </>
  );
}

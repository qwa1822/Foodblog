import React from "react";
import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="layout">
      <NavBar />

      {children}
    </div>
  );
}

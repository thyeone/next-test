import React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

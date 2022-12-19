import { serialize } from "cookie";
import { GetServerSideProps } from "next";
import React from "react";
const SsrPage = () => {
  return <div>SsrPage</div>;
};
export default SsrPage;
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const cookie = serialize("ssr-cookie", "ssr-cookie-value", {
    httpOnly: true,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
  return {
    props: {},
  };
};

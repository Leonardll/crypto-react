import Head from "next/head";
import Link from "next/link";
import Header from "./Header";
import { useState } from "react";

function Layout({ children, setSearch, title = "My Crypto Tracker" }) {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme === "light" ? "bg-light" : "bg-dark text-white"}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        {/* <Link rel="icon" href="../../public/favicon.ico" /> */}
      </Head>
      <Header setSearch={setSearch} theme={theme} setTheme={setTheme} />
      <main>{children}</main>
    </div>
  );
}
export default Layout;

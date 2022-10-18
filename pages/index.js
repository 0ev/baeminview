import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
  const [url, setUrl] = useState("");
  const handleClick = () => {
    Router.push({
      pathname: "/baemin",
      query: { url },
    });
  };
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
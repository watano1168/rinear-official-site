import React from "react";
import styles from "./404.module.scss";
import { Meta, SideMenu } from "parts";
import { Image } from "functions";
import backgroundPic from "public/general/thumbnail-locked.webp";

const Page = (): JSX.Element => {
  return (
    <>
      <Meta
        pageTitle="Not Found"
        pageDescription="ページが見つかりません。"
        pagePath="/"
        pageImgPath="/img/main.webp"
      />

      <Image src={backgroundPic} className={styles.background} layout="fill" objectPosition="top" objectFit="cover" />
      <SideMenu />

      <main className={styles.page}>
        <h1 className={styles.title}>404 - Not Found</h1>
        <p className={styles.description}>お探しのページは存在しません。</p>
      </main>
    </>
  );
};

export default Page;

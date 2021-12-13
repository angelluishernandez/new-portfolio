import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ángel Luis Hernández Herrero</title>
        <meta
          name="description"
          content="Ángel Luis Hernández Herrero portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>This is my homepage</div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

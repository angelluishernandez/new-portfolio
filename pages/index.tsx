import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(e.target);
  };
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

        <ul>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

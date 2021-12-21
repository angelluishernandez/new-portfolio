import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface ContainerBlockProps {
  children: React.ReactNode;
  customMeta: any;
}

export default function ContainerBlock({
  children,
  ...customMeta
}: ContainerBlockProps) {
  const router = useRouter();

  const meta = {
    title: "Ángel Luis Hernández Herrero - Front end developer",
    description: "Description",
    image: "avatar.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        {/* TODO: Change url */}
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        {/* TODO: Change url */}

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Ángel Luis Hernández Herrero" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
        {/* TODO: Add interface. Check how interfaces in NEXT.js work */}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}

// NextJS

import { GetStaticProps } from "next";

// Styled components

import styled from "styled-components";

// Api

import { fetchWooCommerceProducts } from "../services/wooCommerceApi-service";
import { Product } from "../utils/wooCommerceTypes";

// Styles

import styles from "../styles/Home.module.css";

// Texts

import texts from "../es_ES.json";
import ProductCard from "../components/ProductCard/ProductCard";

// Tpes for functional components props //

interface Props {
  products: Product[];
}

export default function Home({ products }: Props) {
  return (
    <>
      <StyledH1>{texts.test}</StyledH1>

      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data,
    },
  };
};

const StyledH1 = styled.h1`
  font-family: ${(props: any) => props.theme.font.heading};
  color: var(--primary-color);
`;

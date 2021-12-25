import React from "react";
import Image from "next/image";
import { Product } from "../../utils/wooCommerceTypes";
import { Card, ImageContainer, Details } from "./StyledComponents";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  console.log(product.images[0]);
  return (
    <Card>
      <ImageContainer>
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          layout="fill"
          objectFit="cover"
        ></Image>
      </ImageContainer>

      <Details>
        <span>{product.name}</span>
        <span>--</span>
        <span>
          <strong>€{product.regular_price}</strong>
        </span>
      </Details>
    </Card>
  );
};

export default ProductCard;

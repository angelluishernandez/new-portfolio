import React from "react";
import { Wrapper } from "./QartQuantityComponents";

interface Props {
  decrementFunction?: React.MouseEventHandler<HTMLButtonElement>;
  incrementFunction?: React.MouseEventHandler<HTMLButtonElement>;
  quantity: number;
}

const CartQuantity = ({ decrementFunction, incrementFunction, quantity }: Props) => {
  return (
    <Wrapper>
      <button onClick={decrementFunction}>-</button>
      <p>{quantity}</p>
      <button onClick={incrementFunction}>+</button>
    </Wrapper>
  );
};

export default CartQuantity;

// Styled-components
import { Wrapper } from "./CardItemComponents";

// Redux
import { useAppDispatch } from "../../redux/hooks";
import { decrementLineItemQuantity, addLineItem, removeLineItem } from "../../redux/cartSlice";

// Types
import { LineItem } from "../../utils/wooCommerceTypes";

// Helpers
import { calculatePrice } from "../../helpers/calculatePrice";
import CartQuantity from "../CartQuantity/CartQuantity";

interface Props {
  lineItem: LineItem;
}

const CartItem = (props: Props) => {
  const dispatch = useAppDispatch();

  // copy lineItem object and set the quantity to 1 so only incrementing/decrementing by 1

  const data = { ...props.lineItem };
  data.quantity = 1;

  const increment = () => {
    dispatch(addLineItem(data));
  };

  const decrement = () => {
    dispatch(decrementLineItemQuantity(data));
  };

  const remove = () => {
    dispatch(removeLineItem(data));
  };

  return (
    <Wrapper>
      <div onClick={remove}>X</div>
      <div>{props.lineItem.name}</div>
      <CartQuantity quantity={props.lineItem.quantity} decrementFunction={decrement} incrementFunction={increment} />
      <div>€{calculatePrice(props.lineItem.quantity, props.lineItem.price!)}</div>
    </Wrapper>
  );
};

export default CartItem;

export const calculatePrice = (quantity: number, price: string) => {
  const formattedPrice = parseFloat(price) * 100;
  const result = (formattedPrice * quantity) / 100;
  return result.toFixed(2);
};

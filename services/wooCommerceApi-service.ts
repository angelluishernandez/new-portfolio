import { api } from "./woocommerce-config";

export const fetchWooCommerceProducts = async () => {
  try {
    const res = await api.get("products");
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};

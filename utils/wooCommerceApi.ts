import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "http://woocommerce.local",
  consumerKey: process.env.WOOCOMMERCE_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET!,
  version: "wc/v3",
});

export const fetchWooCommerceProducts = async () => {
  try {
    const res = await api.get("products");
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};

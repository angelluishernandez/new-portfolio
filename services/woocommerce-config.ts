import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
  url: "http://woocommerce.local",
  consumerKey: process.env.WOOCOMMERCE_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET!,
  version: "wc/v3",
});

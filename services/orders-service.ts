import { api } from "./woocommerce-config";
import { Order } from "../utils/wooCommerceTypes";

// create new WooCommerce order by passing in required data object //

export async function createWooCommerceOrder(data: Order): Promise<any> {
  try {
    const response = await api.post("orders", data);
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}

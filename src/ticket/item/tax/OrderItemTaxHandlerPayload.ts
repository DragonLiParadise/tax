import {MenuTax} from "../../../MenuTax";
import {OrderItemTaxesPayload} from "./OrderItemTaxesPayload";

export interface OrderItemTaxHandlerPayload extends OrderItemTaxesPayload {
    menuTax: MenuTax;
}
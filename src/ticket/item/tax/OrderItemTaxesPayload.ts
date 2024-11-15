import {TicketItemsTaxesPayload} from "../../tax/TicketItemsTaxesPayload";
import {OrderItemState} from "../OrderItemState";

export interface OrderItemTaxesPayload extends TicketItemsTaxesPayload {
    orderItem: OrderItemState;
}
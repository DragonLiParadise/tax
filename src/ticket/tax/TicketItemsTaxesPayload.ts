import {TicketTaxesPayload} from "./TicketTaxesPayload";
import {OrderItemState} from "../item";

export interface TicketItemsTaxesPayload extends TicketTaxesPayload {
    taxableItems: OrderItemState[];
    inclusiveTaxItems: OrderItemState[];
}
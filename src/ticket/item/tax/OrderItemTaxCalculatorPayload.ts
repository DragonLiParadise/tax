import {OrderItemState} from "../OrderItemState";
import {TicketState} from "../../TicketState";
import {MenuTax} from "../../../MenuTax";

export interface OrderItemTaxCalculatorPayload {
    ticket: TicketState;
    menuTax: MenuTax;
    orderItem: OrderItemState;
}
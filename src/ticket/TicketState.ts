import {OrderItemState} from "./item";

export interface TicketState {
    items: OrderItemState[];
    splits: TicketState[];
}
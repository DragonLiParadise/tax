import {Location} from "../../Location";
import {OrderItemState} from "../item";

export interface TicketItemsFactoryPayload {
    location: Location;
    orderItems: OrderItemState[];
}
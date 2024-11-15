import {Location} from "../../Location";
import {OrderItemState} from "../item";

export interface TicketAboutItemsFactoryPayload {
    location: Location;
    orderItems: OrderItemState[];
}
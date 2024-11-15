import {Factory} from "../../interfaces";
import {OrderItemState} from "../item";
import {TicketAboutItemsFactoryPayload} from "./TicketAboutItemsFactoryPayload";

export class TicketIncludedTaxItemsFactory implements Factory<TicketAboutItemsFactoryPayload, OrderItemState[]> {
    create(payload: TicketAboutItemsFactoryPayload): OrderItemState[] {
        return undefined;
    }
}
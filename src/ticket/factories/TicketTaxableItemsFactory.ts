import {Factory} from "../../interfaces";
import {OrderItemState} from "../item";
import {TicketItemsFactoryPayload} from "./TicketItemsFactoryPayload";


export class TicketTaxableItemsFactory implements Factory<TicketItemsFactoryPayload, OrderItemState[]> {
    create(payload: TicketItemsFactoryPayload): OrderItemState[] {
        return [];
    }
}
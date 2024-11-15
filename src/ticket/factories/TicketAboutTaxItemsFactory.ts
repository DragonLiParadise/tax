import {Factory} from "../../interfaces";
import {OrderItemState} from "../item";
import {TicketAboutItemsFactoryPayload} from "./TicketAboutItemsFactoryPayload";
import {TicketTaxableItemsFactory} from "./TicketTaxableItemsFactory";
import {TicketIncludedTaxItemsFactory} from "./TicketIncludedTaxItemsFactory";

export interface TicketAboutTaxItems {
    taxable: OrderItemState[];
    inclusive: OrderItemState[];
}

export class TicketAboutTaxItemsFactory implements Factory<TicketAboutItemsFactoryPayload, TicketAboutTaxItems> {
    create(payload: TicketAboutItemsFactoryPayload): TicketAboutTaxItems {
        return {
            taxable: new TicketTaxableItemsFactory().create(payload),
            inclusive: new TicketIncludedTaxItemsFactory().create(payload),
        };
    }
}
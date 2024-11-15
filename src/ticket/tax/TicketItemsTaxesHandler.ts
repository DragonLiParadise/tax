import {Factory, Handler} from "../../interfaces";
import {TicketTaxesPayload} from "./TicketTaxesPayload";
import {TicketItemsTaxesPayload} from "./TicketItemsTaxesPayload";
import {TicketAboutItemsFactoryPayload, TicketAboutTaxItems} from "../factories";
import {HandlerRegistry} from "../../tax";

export class TicketItemsTaxesHandler implements Handler<TicketTaxesPayload> {
    constructor(
        private handler: HandlerRegistry<TicketItemsTaxesPayload>,
        private itemsFactory: Factory<TicketAboutItemsFactoryPayload, TicketAboutTaxItems>,
    ) {
    }

    handle(payload: TicketTaxesPayload): void {
        const {taxable, inclusive} = this.itemsFactory.create({...payload, orderItems: payload.ticket.items});

        this.handler.handle({
            ...payload,
            taxableItems: taxable,
            inclusiveTaxItems: inclusive
        });
    }
}
import {Handler} from "../../interfaces";
import {TicketTaxesPayload} from "./TicketTaxesPayload";
import {TicketItemsTaxesPayload} from "./TicketItemsTaxesPayload";

export class TicketItemsTaxesHandler implements Handler<TicketTaxesPayload> {
    constructor(private handler: Handler<TicketItemsTaxesPayload>) {
    }

    handle(payload: TicketTaxesPayload): void {
        this.handler.handle({
            ...payload,
            orderItems: payload.ticket.items,
        });
    }
}
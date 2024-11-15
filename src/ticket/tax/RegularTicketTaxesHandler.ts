import {Handler} from "../../interfaces";
import {TicketTaxesPayload} from "./TicketTaxesPayload";
import {ticketIsSplit} from "../TicketStateUtil";
import {HandlerRegistry} from "../../tax";

export class RegularTicketTaxesHandler implements Handler<TicketTaxesPayload> {
    constructor(private handler: HandlerRegistry<TicketTaxesPayload>) {
    }

    handle(payload: TicketTaxesPayload): void {
        if (!ticketIsSplit(payload.ticket)) {
            this.handler.handle(payload);
        }
    }
}
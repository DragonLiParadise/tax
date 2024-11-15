import {Handler} from "../../interfaces";
import {TicketTaxesPayload} from "./TicketTaxesPayload";
import {ticketIsSplit} from "../TicketStateUtil";

export class TicketTaxesHandler implements Handler<TicketTaxesPayload> {
    constructor(private handler: Handler<TicketTaxesPayload>) {
    }

    handle(payload: TicketTaxesPayload): void {
        if (ticketIsSplit(payload.ticket)) {
            this.handler.handle(payload);
        }
    }
}
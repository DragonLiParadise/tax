import {Handler} from "../../interfaces";
import {TicketTaxesPayload} from "./TicketTaxesPayload";
import {ticketIsSplit} from "../TicketStateUtil";

export class SplitTicketTaxesHandler implements Handler<TicketTaxesPayload> {
    constructor(private handler: Handler<TicketTaxesPayload>) {
    }

    handle(payload: TicketTaxesPayload): void {
        if (ticketIsSplit(payload.ticket)) {
            payload.ticket.splits.forEach(tab => {
                this.handler.handle({
                    ...payload,
                    ticket: tab,
                })
            })
        }
    }
}
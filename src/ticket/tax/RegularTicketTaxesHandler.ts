import {Handler} from "../../interfaces";
import {TicketTaxesPayload} from "./TicketTaxesPayload";

export class RegularTicketTaxesHandler implements Handler<TicketTaxesPayload> {
    constructor(private handler: Handler<TicketTaxesPayload>) {
    }

    handle(payload: TicketTaxesPayload): void {
        this.handler.handle(payload);
    }
}
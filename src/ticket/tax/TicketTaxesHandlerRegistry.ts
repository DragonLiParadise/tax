import {Registry} from "../../Registry";
import {Handler} from "../../interfaces";
import {TicketTaxesPayload} from "./TicketTaxesPayload";

export class TicketTaxesHandlerRegistry extends Registry<Handler<TicketTaxesPayload>> implements Handler<TicketTaxesPayload> {
    constructor(items: Handler<TicketTaxesPayload>[]) {
        super(items);
    }

    handle(payload: TicketTaxesPayload): void {
        this.forEach(handler => {
            handler.handle(payload);
        })
    }
}
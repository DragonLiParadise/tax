import {Handler} from "../../../interfaces";
import {OrderItemTaxesPayload} from "./OrderItemTaxesPayload";
import {TaxableOrderItemTaxHandler} from "./TaxableOrderItemTaxHandler";

export class TaxableOrderItemTaxesHandler implements Handler<OrderItemTaxesPayload> {
    constructor(
        readonly handler: TaxableOrderItemTaxHandler
    ) {
    }

    handle(payload: OrderItemTaxesPayload): void {
        payload.menuTaxes.forEach((menuTax) => {
            this.handler.handle({
                ...payload,
                menuTax
            });
        })
    }
}
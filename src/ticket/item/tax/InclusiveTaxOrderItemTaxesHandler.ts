import {Handler} from "../../../interfaces";
import {OrderItemTaxesPayload} from "./OrderItemTaxesPayload";
import {InclusiveTaxOrderItemTaxHandler} from "./InclusiveTaxOrderItemTaxHandler";

export class InclusiveTaxOrderItemTaxesHandler implements Handler<OrderItemTaxesPayload> {
    constructor(
        readonly handler: InclusiveTaxOrderItemTaxHandler,
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
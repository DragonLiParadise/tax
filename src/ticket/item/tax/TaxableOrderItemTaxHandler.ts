import {Calculator, Handler} from "../../../interfaces";
import {OrderItemTaxHandlerPayload} from "./OrderItemTaxHandlerPayload";
import {TaxCalculatorPayload} from "../../../tax";

export class TaxableOrderItemTaxHandler implements Handler<OrderItemTaxHandlerPayload> {
    constructor(readonly calculator: Calculator<TaxCalculatorPayload, number>) {
    }

    handle(payload: OrderItemTaxHandlerPayload): void {


        const taxAmount = this.calculator.calculate({
            menuTax: payload.menuTax,
            taxableAmount: 0,
        })


    }
}
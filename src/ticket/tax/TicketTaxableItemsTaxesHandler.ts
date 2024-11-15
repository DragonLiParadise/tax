import {Calculator, Factory, Handler} from "../../interfaces";
import {TicketItemsTaxesPayload} from "./TicketItemsTaxesPayload";
import {OrderItemState} from "../item";
import {TicketItemsFactoryPayload} from "../factories";
import {OrderItemTaxCalculatorPayload} from "../item/tax/OrderItemTaxCalculatorPayload";

export class TicketTaxableItemsTaxesHandler implements Handler<TicketItemsTaxesPayload> {
    constructor(
        readonly taxableItemsFactory: Factory<TicketItemsFactoryPayload, OrderItemState[]>,
        readonly calculator: Calculator<OrderItemTaxCalculatorPayload, number>
    ) {
    }

    handle(payload: TicketItemsTaxesPayload): void {
        const orderItems = this.taxableItemsFactory.create(payload);

        orderItems.forEach((orderItem: OrderItemState) => {
            payload.menuTaxes.forEach(menuTax => {
                const taxAmount = this.calculator.calculate({
                    ticket: payload.ticket,
                    menuTax,
                    orderItem,
                });
            })
        })
    }
}
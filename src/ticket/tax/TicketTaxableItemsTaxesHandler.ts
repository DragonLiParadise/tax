import {Handler} from "../../interfaces";
import {TicketItemsTaxesPayload} from "./TicketItemsTaxesPayload";
import {OrderItemState} from "../item";
import * as _ from "lodash";
import {TaxableOrderItemTaxesHandler} from "../item";

export class TicketTaxableItemsTaxesHandler implements Handler<TicketItemsTaxesPayload> {
    constructor(
        readonly handler: TaxableOrderItemTaxesHandler
    ) {
    }

    handle(payload: TicketItemsTaxesPayload): void {
        payload.taxableItems.forEach((orderItem: OrderItemState) => {
            this.handler.handle({
                ...payload,
                menuTaxes: _.cloneDeep(payload.menuTaxes),
                orderItem
            });
        })
    }
}
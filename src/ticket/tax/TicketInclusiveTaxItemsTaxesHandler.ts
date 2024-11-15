import {Handler} from "../../interfaces";
import {TicketItemsTaxesPayload} from "./TicketItemsTaxesPayload";
import {OrderItemState} from "../item";
import * as _ from "lodash";
import {InclusiveTaxOrderItemTaxesHandler} from "../item";

export class TicketInclusiveTaxItemsTaxesHandler implements Handler<TicketItemsTaxesPayload> {
    constructor(
        readonly handler: InclusiveTaxOrderItemTaxesHandler
    ) {
    }

    handle(payload: TicketItemsTaxesPayload): void {
        payload.inclusiveTaxItems.forEach((orderItem: OrderItemState) => {
            this.handler.handle({
                ...payload,
                menuTaxes: _.cloneDeep(payload.menuTaxes),
                orderItem
            });
        })
    }
}
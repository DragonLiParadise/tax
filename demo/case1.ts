import {tap} from "lodash";
import {HandlerRegistry, PercentageTaxCalculator, TicketTaxesHandler, TicketTaxesPayload} from "../src";
import {RegularTicketTaxesHandler} from "../src/ticket/tax/RegularTicketTaxesHandler";
import {SplitTicketTaxesHandler} from "../src/ticket/tax/SplitTicketTaxesHandler";
import {TicketItemsTaxesHandler} from "../src/ticket/tax/TicketItemsTaxesHandler";
import {TicketItemsTaxesPayload} from "../src/ticket/tax/TicketItemsTaxesPayload";
import {TicketTaxableItemsTaxesHandler} from "../src/ticket/tax/TicketTaxableItemsTaxesHandler";
import {
    InclusiveTaxOrderItemTaxesHandler, InclusiveTaxOrderItemTaxHandler,
    TaxableOrderItemTaxesHandler,
    TaxableOrderItemTaxHandler
} from "../src/ticket/item";
import {TicketInclusiveTaxItemsTaxesHandler} from "../src/ticket/tax/TicketInclusiveTaxItemsTaxesHandler";
import {TicketAboutTaxItemsFactory} from "../src/ticket/factories";

export const aboutItemsHandler = tap(new HandlerRegistry<TicketItemsTaxesPayload>(), registry => {
    registry.register(new TicketTaxableItemsTaxesHandler(
        new TaxableOrderItemTaxesHandler(
            new TaxableOrderItemTaxHandler(
                new PercentageTaxCalculator(),
            ),
        )
    ));

    registry.register(new TicketInclusiveTaxItemsTaxesHandler(
        new InclusiveTaxOrderItemTaxesHandler(
            new InclusiveTaxOrderItemTaxHandler(
                new PercentageTaxCalculator(),
            ),
        )
    ));
});

export const aboutRegularTicketTaxesHandlers = tap(new HandlerRegistry<TicketTaxesPayload>(), registry => {
    registry.register(new TicketItemsTaxesHandler(aboutItemsHandler, new TicketAboutTaxItemsFactory()));
});

const aboutTicketHandler = tap(new HandlerRegistry<TicketTaxesPayload>(), registry => {
    const ticketTaxesHandlers = aboutRegularTicketTaxesHandlers;

    registry.register(new RegularTicketTaxesHandler(ticketTaxesHandlers));

    registry.register(new SplitTicketTaxesHandler(ticketTaxesHandlers));
});


const handler = new TicketTaxesHandler(aboutTicketHandler);

handler.handle({
    taxSubItemsSeparately: false,
    ticket: {
        items: [],
        splits: [],
    },
    menuTaxes: [],
})
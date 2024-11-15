import {TicketState} from "../TicketState";
import {MenuTaxesPayload} from "../MenuTaxesPayload";

export interface TicketTaxesPayload extends MenuTaxesPayload {
    taxSubItemsSeparately: boolean;
    ticket: TicketState;
}
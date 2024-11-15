import {TicketState} from "../TicketState";
import {Location} from "../../Location";
import {MenuTaxesPayload} from "../MenuTaxesPayload";

export interface TicketTaxesPayload extends MenuTaxesPayload {
    location: Location;
    ticket: TicketState;
}
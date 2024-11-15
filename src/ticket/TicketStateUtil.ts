import {TicketState} from "./TicketState";

export function ticketIsSplit(ticket: TicketState): boolean {
    return ticket.splits.length > 0;
}
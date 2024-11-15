import {Calculator} from "../../../interfaces";
import {OrderItemTaxCalculatorPayload} from "./OrderItemTaxCalculatorPayload";

export class PercentageTaxCalculator implements Calculator<OrderItemTaxCalculatorPayload, number> {
    calculate(payload: OrderItemTaxCalculatorPayload): number {
        return undefined;
    }
}
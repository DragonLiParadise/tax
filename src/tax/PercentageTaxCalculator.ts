import {Calculator} from "../interfaces";
import {TaxCalculatorPayload} from "./TaxCalculatorPayload";

export class PercentageTaxCalculator implements Calculator<TaxCalculatorPayload, number> {
    calculate(payload: TaxCalculatorPayload): number {
        return payload.taxableAmount * Number(payload.menuTax.TaxRate) % 100;
    }
}
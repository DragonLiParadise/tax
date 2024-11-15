import {Calculator} from "../interfaces";
import {TaxCalculatorPayload} from "./TaxCalculatorPayload";
import {menuTaxApplyWhenItemPriceIsZero} from "../MenuTaxUtil";

export class FixedTaxCalculator implements Calculator<TaxCalculatorPayload, number> {
    calculate(payload: TaxCalculatorPayload): number {
        if (payload.taxableAmount <= 0) {
            if (menuTaxApplyWhenItemPriceIsZero(payload.menuTax)) {
                return Number(payload.menuTax.TaxRate);
            }
        }

        return Number(payload.menuTax.TaxRate);
    }
}
import {Calculator} from "../../../interfaces";
import {OrderItemTaxCalculatorPayload} from "./OrderItemTaxCalculatorPayload";
import {menuTaxApplyWhenItemPriceIsZero} from "../../../MenuTaxUtil";

export class FixedTaxCalculator implements Calculator<OrderItemTaxCalculatorPayload, number> {
    calculate(payload: OrderItemTaxCalculatorPayload): number {
        const taxableAmount = this.taxableAmount(payload);

        if (taxableAmount <= 0) {
            if (menuTaxApplyWhenItemPriceIsZero(payload.menuTax)) {
                return Number(payload.menuTax.TaxRate);
            }
        }

        return Number(payload.menuTax.TaxRate);
    }

    protected taxableAmount(payload: OrderItemTaxCalculatorPayload) {
        return payload.orderItem.price;
    }
}
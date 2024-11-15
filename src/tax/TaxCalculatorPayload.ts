import {MenuTax} from "../MenuTax";

export interface TaxCalculatorPayload {
    taxableAmount: number;
    menuTax: MenuTax;
}
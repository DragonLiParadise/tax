import {MenuTax} from "./MenuTax";

export function menuTaxApplyWhenItemPriceIsZero(menuTax: MenuTax): boolean {
    return !!Number(menuTax.ApplyWhenItemPriceIsZero);
}
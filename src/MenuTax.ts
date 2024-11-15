export interface MenuTaxTag {
    id: string;
}

export interface MenuTax {
    PKID: string;
    Description: string;
    ApplyMin: string;
    ApplyMax: string;
    BracketMin: string;
    BracketMax: string;
    BracketRepeat: string;
    CannotExempt: boolean;
    OverrideDefault: string;
    IsPercent: string;
    ApplyBeforeTax: string;
    ApplyWhenItemPriceIsZero: string;
    Reference: string;
    RoomSpecific: string;
    RoundingOption: string;
    StartDate: string;
    EndDate: string;
    TaxGroupID: string;
    TaxRate: string;
    TaxableEntities: string;
    TaxableServings: string;
    ignoreTags: MenuTaxTag[];
    overrideTags: MenuTaxTag[];
    servingTags: MenuTaxTag[];
    tags: MenuTaxTag[];
}
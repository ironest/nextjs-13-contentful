import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSrComparisonTableFields {
    vertical: EntryFieldTypes.Symbol<"Electronics Retailers" | "Quick Service Restaurants" | "Real Estate Agents" | "Supermarkets">;
}

export type TypeSrComparisonTableSkeleton = EntrySkeletonType<TypeSrComparisonTableFields, "srComparisonTable">;
export type TypeSrComparisonTable<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSrComparisonTableSkeleton, Modifiers, Locales>;

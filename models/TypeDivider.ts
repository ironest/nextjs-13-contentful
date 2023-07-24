import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeDividerFields {
    name: EntryFieldTypes.Symbol;
    divider?: EntryFieldTypes.AssetLink;
}

export type TypeDividerSkeleton = EntrySkeletonType<TypeDividerFields, "divider">;
export type TypeDivider<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeDividerSkeleton, Modifiers, Locales>;

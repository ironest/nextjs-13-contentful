import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNavbarFields {
    name: EntryFieldTypes.Symbol;
    desktopImage: EntryFieldTypes.AssetLink;
    tabletImage: EntryFieldTypes.AssetLink;
    mobileImage: EntryFieldTypes.AssetLink;
}

export type TypeNavbarSkeleton = EntrySkeletonType<TypeNavbarFields, "navbar">;
export type TypeNavbar<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavbarSkeleton, Modifiers, Locales>;

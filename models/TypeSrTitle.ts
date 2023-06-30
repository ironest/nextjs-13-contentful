import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSrTitleFields {
    text: EntryFieldTypes.Symbol;
}

export type TypeSrTitleSkeleton = EntrySkeletonType<TypeSrTitleFields, "srTitle">;
export type TypeSrTitle<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSrTitleSkeleton, Modifiers, Locales>;

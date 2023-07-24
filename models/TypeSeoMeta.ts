import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSeoMetaFields {
    internalName: EntryFieldTypes.Symbol;
    seoTitle: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Symbol;
    keywords: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    noIndex: EntryFieldTypes.Boolean;
    noFollow: EntryFieldTypes.Boolean;
}

export type TypeSeoMetaSkeleton = EntrySkeletonType<TypeSeoMetaFields, "seoMeta">;
export type TypeSeoMeta<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSeoMetaSkeleton, Modifiers, Locales>;

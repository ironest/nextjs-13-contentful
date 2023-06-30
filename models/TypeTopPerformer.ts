import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTopPerformerFields {
    canstarAward: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    providerName: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    providerLogo: EntryFieldTypes.AssetLink;
}

export type TypeTopPerformerSkeleton = EntrySkeletonType<TypeTopPerformerFields, "topPerformer">;
export type TypeTopPerformer<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTopPerformerSkeleton, Modifiers, Locales>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSrDescriptionFields {
    text: EntryFieldTypes.Text;
}

export type TypeSrDescriptionSkeleton = EntrySkeletonType<TypeSrDescriptionFields, "srDescription">;
export type TypeSrDescription<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSrDescriptionSkeleton, Modifiers, Locales>;

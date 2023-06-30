import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSrDescriptionSkeleton } from "./TypeSrDescription";
import type { TypeSrTitleSkeleton } from "./TypeSrTitle";
import type { TypeTopPerformerSkeleton } from "./TypeTopPerformer";

export interface TypeRatingsFields {
    name: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSrDescriptionSkeleton | TypeSrTitleSkeleton | TypeTopPerformerSkeleton>>;
}

export type TypeRatingsSkeleton = EntrySkeletonType<TypeRatingsFields, "ratings">;
export type TypeRatings<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeRatingsSkeleton, Modifiers, Locales>;

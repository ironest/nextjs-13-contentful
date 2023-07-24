import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeDividerSkeleton } from "./TypeDivider";
import type { TypeNavbarSkeleton } from "./TypeNavbar";
import type { TypeSeoMetaSkeleton } from "./TypeSeoMeta";
import type { TypeSrComparisonTableSkeleton } from "./TypeSrComparisonTable";
import type { TypeSrDescriptionSkeleton } from "./TypeSrDescription";
import type { TypeSrImportantNotesSkeleton } from "./TypeSrImportantNotes";
import type { TypeSrTitleSkeleton } from "./TypeSrTitle";
import type { TypeTopPerformerSkeleton } from "./TypeTopPerformer";

export interface TypeRatingsFields {
    name: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeDividerSkeleton | TypeNavbarSkeleton | TypeSrComparisonTableSkeleton | TypeSrDescriptionSkeleton | TypeSrImportantNotesSkeleton | TypeSrTitleSkeleton | TypeTopPerformerSkeleton>>;
    seo?: EntryFieldTypes.EntryLink<TypeSeoMetaSkeleton>;
}

export type TypeRatingsSkeleton = EntrySkeletonType<TypeRatingsFields, "ratings">;
export type TypeRatings<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeRatingsSkeleton, Modifiers, Locales>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSrImportantNotesFields {
    name: EntryFieldTypes.Symbol;
    notes: EntryFieldTypes.RichText;
}

export type TypeSrImportantNotesSkeleton = EntrySkeletonType<TypeSrImportantNotesFields, "srImportantNotes">;
export type TypeSrImportantNotes<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSrImportantNotesSkeleton, Modifiers, Locales>;

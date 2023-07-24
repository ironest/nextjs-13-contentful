import { TypeRatingsFields, TypeSeoMetaFields } from "@/models";
import { EntrySkeletonType, createClient } from "contentful";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} = process.env;

// This is the standard Contentful client. It fetches
// content that has been published.
const client = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
});

// This is a Contentful client that's been configured
// to fetch drafts and unpublished content.
const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: "preview.contentful.com",
});

const contentfulClient = ({ preview = false }) => {
  if (preview) {
    return previewClient;
  }
  return client;
};

export async function fetchEntryBySlug(
  contentType: string,
  slug: string,
  preview: boolean
) {
  const contentful = contentfulClient({ preview });

  const entries = await contentful.getEntries<
    EntrySkeletonType<TypeRatingsFields, string>
  >({
    content_type: contentType,
    "fields.slug": slug,
  });

  return entries?.items[0];
}

export async function fetchEntryContentBySlug(
  contentType: string,
  slug: string,
  preview: boolean
) {
  const response = await fetchEntryBySlug(contentType, slug, preview);

  return response?.fields?.content.map(
    (entry: any /*TODO using any as hack*/) => {
      return {
        id: entry?.sys?.id as string,
        contentType: entry?.sys?.contentType?.sys?.id as string,
        fields: entry?.fields as any,
      };
    }
  );
}

export async function fetchEntryMetaBySlug(
  contentType: string,
  slug: string,
  preview: boolean
) {
  const response = await fetchEntryBySlug(contentType, slug, preview);
  return <TypeSeoMetaFields>(<any>response?.fields?.seo)?.fields;
}

export async function fetchAllEntries(contentType: string, preview: boolean) {
  const contentful = contentfulClient({ preview });

  const entries = await contentful.getEntries<
    EntrySkeletonType<TypeRatingsFields, string>
  >({
    content_type: contentType,
  });

  const response = entries?.items?.map((item) => {
    return {
      id: item?.sys?.id as string,
      contentType: item?.sys?.contentType?.sys?.id as string,
      name: item?.fields?.name,
      slug: item?.fields?.slug,
      full_slug: contentType + "/" + item?.fields?.slug,
    };
  });

  return response || [];
}

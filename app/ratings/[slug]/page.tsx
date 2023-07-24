import ContentfulComponent from "@/components/contentful-component";
import {
  fetchEntryContentBySlug,
  fetchEntryMetaBySlug,
} from "@/services/fetch-data.service";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const slugMeta = await fetchEntryMetaBySlug("ratings", params.slug, false);

  const {
    seoTitle: title,
    description,
    keywords,
    noIndex,
    noFollow,
  } = slugMeta;
  return {
    title,
    description,
    keywords,
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
      },
    },
  };
}

export default async function StarRating({
  params,
}: {
  params: { slug: string };
}) {
  const slugContent = await fetchEntryContentBySlug(
    "ratings",
    params.slug,
    false
  );
  return (
    <>
      {slugContent?.length ? (
        slugContent.map((entry) => (
          <section
            key={entry.id}
            style={{
              margin: entry.contentType != "navbar" ? "2.5rem 0" : 0,
            }}
          >
            <ContentfulComponent
              contentType={entry.contentType}
              data={entry.fields}
            />
          </section>
        ))
      ) : (
        <h4>
          Unable to load Contentful data. Please check if everything is
          configured properly
        </h4>
      )}
    </>
  );
}

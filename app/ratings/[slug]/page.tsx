import ContentfulComponent from "@/components/contentful-component";
import { fetchEntryBySlug } from "@/services/fetch-data.service";

export default async function StarRating({
  params,
}: {
  params: { slug: string };
}) {
  const slugContent = await fetchEntryBySlug("ratings", params.slug, false);
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

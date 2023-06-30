import SRTitle from "@/components/ratings/title/title";

const components = {
  srTitle: SRTitle,
  srDescription: SRTitle,
  divider: SRTitle,
  srImportantNotes: SRTitle,
  topPerformer: SRTitle,
}

export const getComponentByContentType = (contentType: string) => {
  return components[contentType as keyof typeof components];
}
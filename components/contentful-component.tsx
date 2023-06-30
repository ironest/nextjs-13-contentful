import SRTitle from "@/components/ratings/title/title";
import React from "react";
import SRDescription from "./ratings/description/description";
import SRDivider from "./ratings/divider";
import SRImportantNotes from "./ratings/important-notes/important-notes";
import SRTopPerformer from "./ratings/top-performer/top-performer";
import Navbar from "./navbar/navbar";
import SRComparisonTable from "./ratings/comparison-table/comparison-table";

const components = {
  srTitle: SRTitle,
  srDescription: SRDescription,
  navbar: Navbar,
  divider: SRDivider,
  srImportantNotes: SRImportantNotes,
  topPerformer: SRTopPerformer,
  srComparisonTable: SRComparisonTable
};

const ContentfulComponent = ({
  contentType,
  data,
}: {
  contentType: string;
  data: any;
}) =>
  React.createElement(components[contentType as keyof typeof components], {
    blok: data,
  });

export default ContentfulComponent;

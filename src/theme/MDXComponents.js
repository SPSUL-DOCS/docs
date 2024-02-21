import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import {
  DescriptionImage,
  DescriptionImageWithFill,
} from "@site/src/components/DescriptionImage";
import Highlight from "@site/src/components//Highlight";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  DescriptionImage,
  Highlight,
};

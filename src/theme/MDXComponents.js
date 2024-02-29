import MDXComponents from "@theme-original/MDXComponents";
import DescriptionImage from "@site/src/components/DescriptionImage";
import Highlight from "@site/src/components/Highlight";
import Description from "@site/src/components/Description";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  DescriptionImage,
  Highlight,
  Description,
};

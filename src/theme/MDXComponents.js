import MDXComponents from "@theme-original/MDXComponents";
import React from "react";
import styles from "./styles.module.css";

function DescriptionImage({ src, alt, children }) {
  return (
    <div className="center">
      <img src={src} alt={alt} />
      <p className={styles.description}>{children}</p>
    </div>
  );
}

const Highlight = ({ color, children }) => (
  <span
    style={{
      color: color,
    }}
  >
    {children}
  </span>
);

function Description({ children }) {
  return <DescriptionImage>{children}</DescriptionImage>;
}

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  DescriptionImage,
  Highlight,
  Description,
};

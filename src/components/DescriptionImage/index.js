import styles from "./styles.module.css";
import React from "react";

export default function DescriptionImage({ src, alt, children }) {
  return (
    <div className="center">
      <img src={src} alt={alt} />
      <p className={styles.description}>{children}</p>
    </div>
  );
}

export function DescriptionImageWithFill({ src, alt, children }) {
  return (
    <div className="center">
      <img src={src} alt={alt} style={{ fill: "#FFFFFF" }} />
      <p className={styles.description}>{children}</p>
    </div>
  );
}

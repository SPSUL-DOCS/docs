import styles from "./styles.module.css";
import React from "react";

export function DescriptionImage({ src, alt, children }) {
  return (
    <div className="center">
      <img src={src} alt={alt} />
      <p className={styles.description}>{children}</p>
    </div>
  );
}

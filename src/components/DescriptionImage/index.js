import styles from "./styles.module.css";
import React from "react";

export default function DescriptionImage({ src, alt, description }) {
  return (
    <div className="center">
      <img src={src} alt={alt} />
      <p className={styles.description}>{description}</p>
    </div>
  );
}

/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./Abstract.module.scss";
import { ScenarioContent } from "lib/contents";
import StaticImage from "components/functions/StaticImage";

type Props = {
  content: ScenarioContent;
};

const Abstract = ({ content }: Props): JSX.Element => (
  <div className={styles.layout}>
    <p className={styles.description}>{content.description}</p>
    <div className={styles.thumbnails}>
      {content.thumbnails.map((thumbnail, index) => (
        <StaticImage
          src={thumbnail}
          alt="サブサムネイル"
          className={styles.thumbnail}
          key={`thumbnail-${index}-${thumbnail.src}`}
        />
      ))}
    </div>
  </div>
);

export default Abstract;

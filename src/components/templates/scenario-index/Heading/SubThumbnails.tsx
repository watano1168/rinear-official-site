/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import styles from "./SubThumbnails.module.scss";
import { ScenarioContentHead } from "lib/contents";
import StaticImage from "components/functions/StaticImage";

type Props = {
  head: ScenarioContentHead;
};

const SubThumbnails = ({ head }: Props): JSX.Element => (
  <div className={styles.layout}>
    {head.thumbnails.slice(1).map((thumbnailPath, index) => (
      <StaticImage
        src={thumbnailPath}
        alt={head.title}
        className={styles.item}
        key={`thumbnailPath-${index}`}
        layout="responsive"
      />
    ))}
  </div>
);

export default SubThumbnails;

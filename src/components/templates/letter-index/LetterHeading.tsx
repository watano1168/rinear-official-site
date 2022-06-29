/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import styles from "./LetterHeading.module.scss";
import { LetterContentHead } from "lib/contents";
import StaticImage from "components/functions/StaticImage";
import { formatExceededTime } from "lib/helper";
import defaultThumbnail from "public/img/default-thumbnail.webp";

type Props = {
  head: LetterContentHead;
};

const LetterHeading = ({ head }: Props): JSX.Element => (
  <article className={styles.container}>
    <StaticImage src={head.thumbnail ?? defaultThumbnail} alt={head.title} className={styles.thumbnail} />
    <p className={styles.index}>#{head.index}</p>
    <p className={styles.updatedAt}>{formatExceededTime(dayjs(), head.updatedAt)}</p>
    <h2 className={styles.title}>{head.title}</h2>
  </article>
);

export default LetterHeading;

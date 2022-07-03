/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React, { ReactNode, useContext } from "react";
import styles from "./Heading.module.scss";
import MaterialPic from "public/img/materials.png";
import { assignClasses } from "lib/helper";
import { ContentContext } from "lib/contents";
import StaticImage from "components/functions/StaticImage";
import LetterPic from "public/img/letters.png";

type Props = {
  children?: ReactNode;
  level: "top" | "sub" | "detail";
};

const TopHeading = ({ children }: { children?: ReactNode }) => {
  const content = useContext(ContentContext);
  return (
    <h1 className={assignClasses(styles.heading, styles.top)}>
      <StaticImage src={content.genre === "letters" ? LetterPic : MaterialPic} alt="アイコン" className={styles.icon} />
      {children}
    </h1>
  );
};

const SubHeading = ({ children }: { children?: ReactNode }) => (
  <h2 className={assignClasses(styles.heading, styles.sub)}>{children}</h2>
);

const DetailHeading = ({ children }: { children?: ReactNode }) => (
  <h3 className={assignClasses(styles.heading, styles.detail)}>{children}</h3>
);

const Heading = ({ children, level }: Props): JSX.Element => {
  if (level === "top") return <TopHeading>{children}</TopHeading>;
  if (level === "sub") return <SubHeading>{children}</SubHeading>;
  return <DetailHeading>{children}</DetailHeading>;
};

export default Heading;

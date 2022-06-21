/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import React from "react";
import styles from "./Menu.module.scss";
import MenuItem, { MenuItemProps } from "./MenuItem";
import talksPic from "public/img/talks.png";
import scenariosPic from "public/img/scenarios.png";

const items: MenuItemProps[] = [
  {
    href: "/talks",
    name: "TALKS",
    iconSrc: talksPic,
    description: "制作風景"
  },
  {
    href: "/scenarios",
    name: "SCENARIOS",
    iconSrc: scenariosPic,
    description: "作品一覧"
  }
];

const Menu = (): JSX.Element => {
  return (
    <div className={styles.background}>
      <div className={styles.items}>
        {items.map((item) => (
          <MenuItem {...item} key={item.href} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

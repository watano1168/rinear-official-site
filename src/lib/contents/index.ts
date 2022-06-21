/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { createContext, RefObject } from "react";

export type { ScenarioContentHead, ScenarioContent } from "./scenario";
export type { TalkContentHead, TalkContent } from "./talks";

const ContentGenres = {
  talks: "talks",
  scenarios: "scenarios"
} as const;

export type ContentGenre = typeof ContentGenres[keyof typeof ContentGenres];

export type ChapterPoint = {
  name: string;
  ref: RefObject<HTMLElement>;
};

export type ContentHead = {
  genre: ContentGenre;
  id: string;
  title: string;
  updatedAt: dayjs.Dayjs;
  description: string;
};

export type ContentPageProps = {
  setChapters: (chapters: ChapterPoint[]) => void;
};

export type ContentPage = (props: ContentPageProps) => JSX.Element;

export type Content = ContentHead & {
  Page: ContentPage;
};

export function getContentPath(content: ContentHead): string {
  return `/${content.genre}/${content.id}`;
}

export type ContentContextProps = {
  genre: ContentGenre;
};

export const ContentContext = createContext<ContentContextProps>({
  genre: "talks"
});

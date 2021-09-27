import bustersMission from "./projects/busters-mission";
import marvelous from "./projects/marvelous";
import mazeEscape from "./projects/maze-escape";
import popcornChef from "./projects/popcorn-chef";
import rinearOfficialSite from "./projects/rinear-official-site";
import introduction from "./talks/introduction";
import { TalkContent, ProjectContent, ContentHead } from "lib/contents";

class ContentsRepository {
  private contents: {
    talks: TalkContent[];
    projects: ProjectContent[];
  } = {
    talks: [introduction],
    projects: [bustersMission, marvelous, mazeEscape, popcornChef, rinearOfficialSite]
  };

  public getTalkContents(sort: "none" | "updatedAt" = "none"): TalkContent[] {
    const contents = [...this.contents.talks];
    if (sort === "updatedAt")
      contents.sort((a, b) => {
        if (b.index > a.index) return 1;
        if (b.index == a.index) return 0;
        return -1;
      });
    return contents;
  }

  public getProjectContents(sort: "none" | "updatedAt" = "none"): ProjectContent[] {
    const contents = [...this.contents.projects];
    if (sort === "updatedAt")
      contents.sort((a, b) => {
        if (b.updatedAt.isAfter(a.updatedAt)) return 1;
        if (b.updatedAt.isSame(a.updatedAt)) return 0;
        return -1;
      });
    return contents;
  }
}

export function getRoute(content: ContentHead): string {
  return `/${content.genre}/${content.id}`;
}

export const contentsRepository = new ContentsRepository();

import dayjs from "dayjs";
import styles from "./ProjectHeading.module.scss";
import { ProjectContentHead } from "lib/contents";
import FixedImage from "components/functions/image/FixedImage";
import { formatDisplayDate, formatExceededTime } from "lib/helper";

type Props = {
  head: ProjectContentHead;
};

const ProjectHeading = ({ head }: Props): JSX.Element => (
  <article className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>{head.title}</h1>
      <p className={styles.description}>{head.description}</p>
      <h5 className={styles.updatedAt}>{"最終更新：" + formatExceededTime(dayjs(), head.updatedAt)}</h5>
      <h5 className={styles.releasedAt}>
        <span className={styles.text}>{head.releasedAt ? formatDisplayDate(head.releasedAt) : "---"}</span>
      </h5>
    </div>
    <FixedImage src={head.thumbnails[0]} alt={head.title} className={styles.mainThumbnail} />
    <div className={styles.subThumbnailsContainer}>
      {head.thumbnails.slice(1).map((thumbnailPath, index) => (
        <FixedImage
          src={thumbnailPath}
          alt={head.title}
          className={styles.subThumbnail}
          key={`thumbnailPath-${index}`}
        />
      ))}
    </div>
  </article>
);

export default ProjectHeading;

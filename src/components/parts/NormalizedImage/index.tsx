import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";

export type NormalizedImageParams = {
  src: string;
  alt: string;
  widthRate?: number;
  heightRate?: number;
  lock?: "width" | "height";
};

const NormalizedImage = getComponentTemplate(
  ({ src, alt, widthRate = 16, heightRate = 9, lock = "width" }: NormalizedImageParams) => (
    <div className={styles.aspectKeeper} style={{ paddingTop: `calc(100% * ${heightRate} / ${widthRate})` }}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  )
);

export default NormalizedImage;

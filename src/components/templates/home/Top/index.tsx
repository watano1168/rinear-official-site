import styles from "./index.module.scss";
import Background from "./Background";
import Logo from "src/components/parts/Logo";

export default function Top(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Background />
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
    </div>
  );
}

import styles from "./styles.module.css";

export interface header {
  title?: string;
}

const Header = ({ title }: header) => {
  return <header className={styles.header}>{title || "Default"}</header>;
};

export default Header;

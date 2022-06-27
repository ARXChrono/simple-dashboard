import styles from "./styles.module.css";

export interface title {
  title?: string;
}

const Header = ({ title }: title) => {
  return <header className={styles.header}>{title || "Default"}</header>;
};

export default Header;

import styles from "./styles.module.css";

const Header = ({ title }: { title?: string }) => {
  return <header className={styles.header}>{title || "Default"}</header>;
};

export default Header;

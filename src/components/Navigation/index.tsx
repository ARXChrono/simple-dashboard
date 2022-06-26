import styles from "./styles.module.css";

interface menuLinks {
  label: string;
  link: string;
  type: string;
}

interface navigationProps {
  menuLinks: menuLinks[];
}

const ListItem = ({ link, label, type }: menuLinks) => {
  if (type === "heading") {
    return (
      <li>
        <h3 className={styles.subheading}>{label}</h3>
      </li>
    );
  }
  return (
    <li>
      <a href={link} className={styles.link}>
        {label}
      </a>
    </li>
  );
};

const Navigation = ({ menuLinks }: navigationProps) => {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.heading}>Dashboard</h2>
      <ul className={styles.list}>{menuLinks.map((item) => ListItem(item))}</ul>
    </nav>
  );
};

export default Navigation;

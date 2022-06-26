import styles from "./styles.module.css";

interface menuLinks {
  label: string;
  link: string;
  type: string;
  index?: number;
}

interface navigationProps {
  menuLinks: menuLinks[];
}

const ListItem = ({ link, label, type, index }: menuLinks) => {
  if (type === "heading") {
    return (
      <li key={`nav-heading-${index}`} data-key={`nav-heading-${index}`}>
        <h3 className={styles.subheading}>{label}</h3>
      </li>
    );
  }
  return (
    <li key={`nav-link-${index}`} data-key={`nav-link-${index}`}>
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
      <ul className={styles.list}>
        {menuLinks.map((item, index) => ListItem({ ...item, index }))}
      </ul>
    </nav>
  );
};

export default Navigation;

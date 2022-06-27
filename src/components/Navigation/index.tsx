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
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", link);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  if (type === "heading") {
    return (
      <li key={`nav-heading-${index}`} data-key={`nav-heading-${index}`}>
        <span className={styles.subheading}>{label}</span>
      </li>
    );
  }
  return (
    <li key={`nav-link-${index}`} data-key={`nav-link-${index}`}>
      <a href={link} className={styles.link} onClick={onClick}>
        {label}
      </a>
    </li>
  );
};

const Navigation = ({ menuLinks }: navigationProps) => {
  return (
    <nav className={styles.nav}>
      <span className={styles.heading}>Dashboard</span>
      <ul className={styles.list}>
        {menuLinks.map((item, index) => ListItem({ ...item, index }))}
      </ul>
    </nav>
  );
};

export default Navigation;

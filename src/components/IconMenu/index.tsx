import styles from "./styles.module.css";
import {
  AiOutlineHome as HomeIcon,
  AiOutlineCheck as CheckIcon,
  AiOutlineLogout as LogoutIcon,
} from "react-icons/ai";

interface IconMenuProps {
  menuLinks: menuLinks[];
  currentPath: string;
  userLoggedIn: boolean;
}

interface menuLinks {
  link: string;
  label: string;
  icon: string;
}

interface IconLinkProps {
  link: string;
  label: string;
  currentPath: string;
  userLoggedIn: boolean;
  icon: string;
  index?: number;
}

const IconLink = ({
  link,
  label,
  icon,
  currentPath,
  userLoggedIn,
  index,
}: IconLinkProps) => {
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", link);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <li
      key={`icon-${link}-${index}`}
      className={`
      ${styles.listItem} 
      ${currentPath === link && styles.active} 
      ${userLoggedIn && icon === "logout" && styles.pushDown}
      `}
    >
      <a
        href={link}
        className={`${styles.link}`}
        onClick={onClick}
        aria-label={label}
      >
        {icon === "home" && <HomeIcon />}
        {icon === "check" && <CheckIcon />}
        {icon === "logout" && <LogoutIcon />}
      </a>
    </li>
  );
};

const IconMenu = ({ menuLinks, currentPath, userLoggedIn }: IconMenuProps) => {
  return (
    <aside className={styles.iconMenu}>
      <ul className={styles.menu}>
        {menuLinks.map(({ link, label, icon }, index) =>
          IconLink({ link, label, icon, currentPath, userLoggedIn, index })
        )}
      </ul>
    </aside>
  );
};

export default IconMenu;

import { ReactNode, useState } from "react";
import styles from "../IconMenu/styles.module.css";
import {
  AiOutlineHome as HomeIcon,
  AiOutlineCheck as CheckIcon,
  AiOutlineLogout as LogoutIcon,
} from "react-icons/ai";

interface IconMenuProps {
  menuLinks: menuLinks[];
  activeLink: string;
  userLoggedIn: boolean;
}

interface menuLinks {
  link: string;
  icon: string;
}

interface IconLinkProps {
  link: string;
  activeLink: string;
  userLoggedIn: boolean;
  icon: ReactNode;
  index: number;
}

const IconLink = ({
  link,
  icon,
  activeLink,
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
      ${activeLink === link && styles.active} 
      ${userLoggedIn && icon === "logout" && styles.pushDown}
      `}
    >
      <a href={link} className={`${styles.link}`} onClick={onClick}>
        {icon === "home" && <HomeIcon />}
        {icon === "check" && <CheckIcon />}
        {icon === "logout" && <LogoutIcon />}
      </a>
    </li>
  );
};

const IconMenu = ({ menuLinks, activeLink, userLoggedIn }: IconMenuProps) => {
  return (
    <aside className={styles.iconMenu}>
      <ul className={styles.menu}>
        {menuLinks.map(({ link, icon }, index) =>
          IconLink({ link, icon, activeLink, userLoggedIn, index })
        )}
      </ul>
    </aside>
  );
};

export default IconMenu;

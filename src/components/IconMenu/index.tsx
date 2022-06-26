import { ReactNode } from "react";
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
  icon: ReactNode;
  index: number;
}

const IconLink = ({ link, icon, activeLink, index }: IconLinkProps) => {
  return (
    <li
      key={`icon-${link}-${index}`}
      className={`${styles.listItem} ${activeLink === link && styles.active}`}
    >
      <a href={link} className={`${styles.link}`}>
        {icon === "home" && <HomeIcon />}
        {icon === "check" && <CheckIcon />}
      </a>
    </li>
  );
};

const IconMenu = ({ menuLinks, activeLink, userLoggedIn }: IconMenuProps) => {
  return (
    <aside className={styles.iconMenu}>
      <ul className={styles.menu}>
        {menuLinks.map(({ link, icon }, index) =>
          IconLink({ link, icon, activeLink, index })
        )}
        {userLoggedIn && (
          <li className={`${styles.pushDown}`}>
            <a href={`/logout`} className={`${styles.link}`}>
              <LogoutIcon />
            </a>
          </li>
        )}
      </ul>
    </aside>
  );
};

export default IconMenu;

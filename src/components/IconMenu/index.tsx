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
  icon: ReactNode;
  index: number;
}

const IconLink = ({ link, icon, index }: IconLinkProps) => {
  return (
    <li className={styles.icon} key={`icon-${link}-${index}`}>
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
          IconLink({ link, icon, index })
        )}
        {userLoggedIn && (
          <li className={`${styles.icon} ${styles.pushDown}`}>
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

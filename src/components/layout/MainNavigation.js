import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import classes from "./MainNavigation.module.css";

export default function MainNavigation({ favorites }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${classes.header} ${
        isVisible ? classes.visible : classes.hidden
      }`}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={PATHS.ALL_MEETUPS}>All Meetups</Link>
          </li>
          <li>
            <Link to={PATHS.NEW_MEETUP}>Add New Meetup</Link>
          </li>
          <li>
            <Link to={PATHS.FAVORITES}>
              My Favorites
              <span className={classes.badge}>{favorites.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

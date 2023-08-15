import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

import Styles from "./navbar.module.scss";
import logo from "../../assets/images/logo.jpg";

const backdropVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const expandedNavbarVariants = {
  initial: {
    x: -500,
    translateY: "-50%",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  animate: {
    x: 0,
    translateY: "-50%",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

  const toggleShow = () => {
    setisNavOpen((prev) => !prev);
  };

  const closeExpandedNav = () => {
    setisNavOpen(false);
  };

  return (
    <>
      <AnimatePresence mode="sync">
        {isNavOpen && (
          <motion.div
            className={Styles.backdrop}
            onClick={closeExpandedNav}
            variants={backdropVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"initial"}
          ></motion.div>
        )}
      </AnimatePresence>

      <div className={Styles.outerContainer}>
        <div className={Styles.container}>
          <img src={logo} alt="ssbbro_logo" className={Styles.logo} />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${Styles.navIcons} ${isActive && Styles.activeRoute}`
            }
          >
            <HomeRoundedIcon />
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `${Styles.navIcons} ${isActive && Styles.activeRoute}`
            }
          >
            <SearchRoundedIcon />
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${Styles.navIcons} ${isActive && Styles.activeRoute}`
            }
          >
            <PersonRoundedIcon />
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `${Styles.navIcons} ${isActive && Styles.activeRoute}`
            }
          >
            <DescriptionRoundedIcon className={Styles.navIcons} />
          </NavLink>
          <button className={Styles.expandBtn} onClick={toggleShow}>
            {isNavOpen ? (
              <KeyboardArrowLeftRoundedIcon fontSize="large" />
            ) : (
              <KeyboardArrowRightRoundedIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence mode="sync">
        {isNavOpen && (
          <motion.div
            className={Styles.expandedNav}
            onClick={closeExpandedNav}
            variants={expandedNavbarVariants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <div className={Styles.container}>
              <p>SSB BRO</p>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${Styles.navIcons} ${isActive && Styles.activeRoute}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  `${Styles.navIcons} ${isActive && Styles.activeRoute}`
                }
              >
                Explore
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${Styles.navIcons} ${isActive && Styles.activeRoute}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `${Styles.navIcons} ${isActive && Styles.activeRoute}`
                }
              >
                Courses
              </NavLink>

              {isNavOpen ? (
                <p style={{ cursor: "pointer" }}>Collapse</p>
              ) : (
                <p style={{ cursor: "pointer" }}>Expand</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

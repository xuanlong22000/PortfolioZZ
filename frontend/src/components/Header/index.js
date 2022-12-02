import React from "react";
import classNames from "classnames/bind";
import Container from "@mui/material/Container";
import { GiBatMask } from "react-icons/gi";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const ListNav = [
  "Home",
  "Portfolio",
  "About",
  "Services",
  "Skills",
  "Testimonial",
  "Journal",
  "Contact",
];

const Header = () => {
  return (
    <div>
      <div className={cx("navContainer")}>
        <Container>
          <div className={cx("navWrapper")}>
            <div className={cx("nav-rightWrapper")}>
              {ListNav.slice(0, ListNav.length / 2).map((nav) => (
                <>
                  <div className={cx("nav-item")}>
                    <span>{nav}</span>
                  </div>
                </>
              ))}
            </div>
            <div className={cx("navCenter")}>
              <span>{<GiBatMask />}</span>
            </div>
            <div className={cx("nav-leftWrapper")}>
              {ListNav.slice(ListNav.length / 2).map((nav) => (
                <>
                  <div className={cx("nav-item")}>
                    <span>{nav}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;

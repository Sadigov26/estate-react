import React from "react";
import styles from "./Header.module.scss";
import logo from "../About/logo (17).png";

const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.containerHeader}>
          <div className={styles.containerHeaderLogo}>
            <img src={logo} alt="" />
            <h1>THE ESTATE</h1>
          </div>
          <div className={styles.containerHeaderNavbar}>
            <nav>    
              <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/Bascet">bascet</a></li>
                <li><a href="/Wishlist">wishlist</a></li>
                <li><a href="">NEWS</a></li>
                <li><a href="">CONTACT</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.containerHeaderNumber}>
            <p>+0080 234 567 84441</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

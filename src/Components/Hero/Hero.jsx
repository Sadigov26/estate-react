import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div>
      <section className={styles.Hero}>
        <div className={styles.containerhero}>
            <h1>Find Your Home</h1>
        </div>
      </section>
    </div>
  );
};

export default Hero;

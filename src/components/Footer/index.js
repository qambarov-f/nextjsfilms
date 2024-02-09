import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link
        href="https://www.linkedin.com/in/feyruz-gambarov-3136b5247/"
        target="_blank"
      >
        Feyruz Gambarov
      </Link>
    </footer>
  );
}

export default Footer;
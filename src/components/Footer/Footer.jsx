import React from "react";
import styles from "./footer.module.scss";
import { FaPhone, FaWhatsapp, FaSearch, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";



const Footer = () => {
  return (

    <div className={styles["main"]}>
      <footer className={styles["footer1"]}>

        <div className={styles["footer_div1"]}>
          <Link href="/">
            <Image
              className={styles["mainLogo"]}
              src="logo.svg"
              width={150}
              height={120}
              alt="UAE Adventure"
            />
          </Link>
        </div>

        <div className={styles["footer_div3"]}>
          <ul className={styles["dropdown__menu"]}>
            <li className={styles["dropdown__item"]}>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className={styles["dropdown__item"]}>
              <Link href="/">Terms and Conditions</Link>
            </li>
            <li className={styles["dropdown__item"]}>
              <Link href="https://wa.me/0527043148">Contact Us</Link>
            </li>
          </ul>
          {/* <h2 className={styles["heading"]}></h2> */}
        </div>

        <div className={styles["footer_div4"]}>
          <h2 className={styles["heading"]}>Need Help?</h2>
          <ul className={styles["dropdown__menu"]}>
            <li className={styles["contact__item"]}>
              <Link href="tel:0527043148">
                <FaPhone className={styles["Footer_Icons"]} />
                <span>052 704 3148</span>
              </Link>
            </li>
            <li className={styles["contact__item"]}>
              <Link href="https://wa.me/0527043148">
                <FaWhatsapp className={styles["Footer_Icons"]} />
                <span>052 704 3148</span>
              </Link>
            </li>
            <li className={styles.contact__item}>
              <FaSearch className={styles["Footer_Icons"]} />
              <Link href="/">
                <span>Dubai, UAE</span>
              </Link>
            </li>
          </ul>

          <ul className={styles["Footer_Links"]}>
            <li>
              <FaFacebook className={styles["Footer_Icons"]} />
            </li>
            <li>
              <FaInstagram className={styles["Footer_Icons"]} />
            </li>
            <li>
              <Link href="https://wa.me/0527043148">
                <FaWhatsapp className={styles["Footer_Icons"]} />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <hr />
      <p className={styles["copyrights"]}>Copyright 2023 UAE Desert, All Rights are reserved</p>
      <p className={styles["copyrights"]}>Developed by: <Link href="https://jawaplum.com/"> JAWAPLUM</Link></p>
    </div>
  );
};

export default Footer;

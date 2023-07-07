// import React from "react";
import styles from "./Card.module.scss";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
function Card({ price, img, title, favour }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["ImageContainer"]}>
        <Image
          width={350}
          height={270}
          className={styles["CardImg"]}
          src={img}
          alt="Cards"
        />
        <p>{price}</p>
      </div>
      <div className={styles["Card_TextMain"]}>
        <h1 className={styles["Heading"]}>{title}</h1>
        <div className={styles["favoursText"]}>
          {favour.map((item, i) => {
            return (
              <div key={i} className={styles["Card_Info"]}>
                <div className={styles["Card_dot"]}></div>
                <p className={styles["Card_Text"]}> {item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["CardBtn"]}>
        <p>
          Book Now <span> ᐳ ᐳ ᐳ </span>
        </p>
        <div>
          <a href="https://wa.me/0527043148" className={styles["wa-btn"]}>
            {" "}
            <FaWhatsapp className={styles["icons"]} /> Whatsapp
          </a>
          <a href="tel:0527043148" className={styles["call-btn"]}>
            {" "}
            <FaPhone className={styles["icons"]} /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

import styles from './topnav.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram ,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';



const TopNav = () => {
  return (
    <>
    <div className={styles["topnav"]}>
      <div className={styles["left"]}>
        <div className={styles["contact"]}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>For Queries Email Us | </span> 
        </div>
        
        <div className={styles["contact"]}>
          <Link href="tel:0527043148">
          <FontAwesomeIcon icon={faPhone} />
          <span>054 544 1919 | </span> 
          </Link>
        </div>
        
        <div className={styles["contact"]}>
          <Link href="https://wa.me/0527043148">
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>054 544 1919</span>
          </Link>
        </div>
      </div>
      <div className={styles["right"]}>
        <Link href="#">
          <FontAwesomeIcon icon={faFacebook} className={styles["icons"]} />
        </Link>
        <Link href="#">
          <FontAwesomeIcon icon={faInstagram} className={styles["icons"]} />
        </Link>
        <Link href="https://wa.me/0527043148">
          <FontAwesomeIcon icon={faWhatsapp} className={styles["icons"]} />
        </Link>
      </div>
    </div>
    </>
  );
};

export default TopNav;

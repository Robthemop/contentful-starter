import React from 'react';
import Link from 'gatsby-link';
import styles from './footer.module.css';
import {SocialIcon} from "react-social-icons";

export default () => (
    <div className={styles.footerBox}>
        <div className={styles.links}>
            <Link to="/impressum/"><h2 className={styles.footerItem}>impressum</h2></Link>
        </div>
    </div>
)

import React from 'react';
import Link from 'gatsby-link';
import styles from './footer.module.css';
import {SocialIcon} from "react-social-icons";

export default () => (
    <div className={styles.footerBox}>
        <div className={styles.link}>
            <Link to="/impressum/">
                <h2 className={styles.impressum}>impressum</h2>
            </Link>
        </div>
        <div className={styles.social}>
            <SocialIcon url="https://www.youtube.com/channel/UC_wsnYRs8E7Z_ezOKIOfgow" className="socialIcon"/>
            <SocialIcon url="http://instagram.com/boulderboysyt" className="socialIcon"/>
            <SocialIcon url="https://www.facebook.com/boulderobin/" className="socialIcon"/>
            <SocialIcon url="https://twitter.com/Boulderboys1" className="socialIcon"/>
        </div>
    </div>
)

import React from 'react';
import Link from 'gatsby-link';
import styles from './navigation.module.css';
import {css, cx} from 'emotion';
import {SocialIcon} from 'react-social-icons';

const color = '#F1582A';


export default () => (

    <nav role="navigation">
        <ul className={styles.navigation}>
            <li className="navigationItem">
                    <SocialIcon url="https://www.youtube.com/channel/UC_wsnYRs8E7Z_ezOKIOfgow" className="socialIcon"/>

            </li>

            <li className="navigationItem">
                    <SocialIcon url="http://instagram.com/boulderboysyt" className="socialIcon"/>

            </li>

            <li className="navigationItem">
                    <SocialIcon url="https://www.facebook.com/Boulder-Boys-1049045915293980/" className="socialIcon"/>
            </li>

            <li className="navigationItem">

                    <SocialIcon url="https://twitter.com/Boulderboys1" className="socialIcon"/>
            </li>

        </ul>
        <ul className={styles.navigation}>
            <li className={styles.navigationItem}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.navigationItem}>
                <Link to="/videos/">Videos</Link>
            </li>
            <li className={styles.navigationItem}>
                <Link to="/kategorien/">Ratgeber</Link>
            </li>
        </ul>
    </nav>
)

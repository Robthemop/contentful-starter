import React from 'react';
import Link from 'gatsby-link';
import styles from './navigation.module.css';
import {css, cx} from 'emotion';
import {SocialIcon} from 'react-social-icons';

const color = '#F1582A';


export default () => (

    <nav role="footer">
        <ul className={styles.navigation}>
            <li className={styles.footerItem}>
                <Link to="/impressum/">Impressum</Link>
            </li>
        </ul>
    </nav>
)

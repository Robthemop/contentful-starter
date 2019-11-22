import React from 'react';
import Link from 'gatsby-link';
import styles from './navigation.module.css';
import {SocialIcon} from 'react-social-icons';

export default () => (

    <nav role="navigation">
        <div className={styles.navigation}>
            <div className={styles.links}>
                <div><Link to="/">HOME</Link></div>
            </div>
        </div>
    </nav>
)

import React from 'react';
import Link from 'gatsby-link';
import styles from './navigation.module.css';

export default () => (
    <nav role="navigation">
        <div className={styles.navigation}>
            <div className={styles.links}>
                <Link to="/">
                    <h2 className="home-title">startseite</h2>
                </Link>
            </div>
        </div>
    </nav>
)

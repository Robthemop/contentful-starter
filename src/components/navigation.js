import React from 'react';
import Link from 'gatsby-link';
import styles from './navigation.module.css';

export default () => (
    <nav role="navigation">
    <div className={styles.navigation}>
                <Link to={`/`}>
                    <p className={styles.breadcrumb}>Startseite</p>
                </Link>
                <Link to={`/kategorien/`}>
                    <p className={styles.breadcrumb}>Alle Kategorien</p>
                </Link>
    </div>
    </nav>
)

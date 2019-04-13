import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'


export default () => (

    <nav role="navigation">
        <ul className={styles.navigation}>

            <li className={styles.navigationItem}>
                <Link exact to="/"
                      activeStyle={{ color: "red"}}
                      partiallyActive={true}
                >
                    <b>Blog</b>
                </Link>
            </li>

            <li className={styles.navigationItem}>
                <Link to="/contact/"
                      activeStyle={{ color: "red" }}
                      partiallyActive={true}
                >
                    <b>Kontakt</b>
                </Link>
            </li>

            <li className={styles.navigationItem}>
                <Link to="/impressum/"
                      activeStyle={{ color: "red" }}
                      partiallyActive={true}
                >
                    <b>Impressum</b>
                </Link>
            </li>

        </ul>
    </nav>
)

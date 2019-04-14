import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'
import {css, cx} from 'emotion'

const color = '#BF4B4B'


export default () => (

    <nav role="navigation">
        <ul className={styles.navigation}>

            <li className={css`
                color: "#026873";
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                padding: 32px;
                background-color: #03A6A6;
                font-size: 24px;
                border-radius: 4px;
                &:hover {
                color: ${color};
            }
                `}
            >
                <Link exact to="/"
                      activeStyle={{color: "#FF665A"}}
                      partiallyActive={true}
                >
                    <b>Blog</b>
                </Link>
            </li>

            <li className={css`
                color: "#026873";
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                padding: 32px;
                background-color: #03A6A6;
                font-size: 24px;
                border-radius: 4px;
                &:hover {
                color: ${color};
            }
                `}>
                <Link to="/contact/"
                      activeStyle={{color: "#FF665A"}}
                >
                    <b>Kontakt</b>
                </Link>
            </li>

            <li className={css`
                color: "#026873";
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                padding: 32px;
                background-color: #03A6A6;
                font-size: 24px;
                border-radius: 4px;
                &:hover {
                color: ${color};
            }
                `}>

                <Link to="/impressum/"
                      activeStyle={{color: "#FF665A"}}
                      partiallyActive={true}
                >
                    <b>Impressum</b>
                </Link>
            </li>

        </ul>
    </nav>
)

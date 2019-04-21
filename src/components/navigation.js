import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'
import {css, cx} from 'emotion'

const color = '#C7E0FF'


export default () => (

    <nav role="navigation">
        <ul className={styles.navigation}>

            <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}
            >
                <Link exact to="/"
                      activeStyle={{color: "#F1582A"}}
                      partiallyActive={true}
                      style={{textDecoration: 'none'}}
                >
                    <b>/</b>
                </Link>
            </li>

            <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}>
                <Link to="/kategorien/"
                      activeStyle={{color: "#F1582A"}}
                      style={{textDecoration: 'none'}}
                >
                    <b>kategorien</b>
                </Link>
            </li>

            <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}>
                <Link to="/contact/"
                      activeStyle={{color: "#F1582A"}}
                      style={{textDecoration: 'none'}}
                >
                    <b>kontakt</b>
                </Link>
            </li>

            <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}>

                <Link to="/impressum/"
                      activeStyle={{color: "#F1582A"}}
                      partiallyActive={true}
                      style={{textDecoration: 'none'}}
                >
                    <b>impressum</b>
                </Link>
            </li>

        </ul>
    </nav>
)

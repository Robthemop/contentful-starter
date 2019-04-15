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
                      activeStyle={{color: "#7AB6FF", textDecoration: 'underline'}}
                      partiallyActive={true}
                      style={{textDecoration: 'none'}}
                >
                    <b>Blog</b>
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
                <Link to="/Boulder-Boys-Vlog/"
                      activeStyle={{color: "#7AB6FF", textDecoration: 'underline'}}
                      style={{textDecoration: 'none'}}
                >
                    <b>Vlog</b>
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
                      activeStyle={{color: "#7AB6FF", textDecoration: 'underline'}}
                      style={{textDecoration: 'none'}}
                >
                    <b>Kontakt</b>
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
                      activeStyle={{color: "#7AB6FF", textDecoration: 'underline'}}
                      partiallyActive={true}
                      style={{textDecoration: 'none'}}
                >
                    <b>Impressum</b>
                </Link>
            </li>

        </ul>
    </nav>
)

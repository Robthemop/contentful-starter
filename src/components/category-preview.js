import React from 'react'
import Link from 'gatsby-link'
import styles from './category-preview.module.css'

export default ({category}) => (
        <Link to={`/${category.title}/`}>
                <h3 className={styles.categoryTitle}>
                    {category.title}
                </h3>
        </Link>
)

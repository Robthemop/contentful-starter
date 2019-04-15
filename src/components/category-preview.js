import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './category-preview.css'

export default ({category}) => (
    <div className={styles.preview}>
        <Link to={`/${category.title}/`} style={{textDecoration: 'none'}}>
            <Img alt="" sizes={category.categoryImage.sizes}>
            </Img>
        </Link>
        <h3 className={styles.previewTitle}>
            <Link to={`/${category.title}/`} style={{textDecoration: 'none'}}>
                {category.title}
            </Link>
        </h3>
    </div>
)

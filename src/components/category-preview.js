import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './category-preview.module.css'

export default ({category}) => (

    <div className={styles.preview}>

        <Link to={`/${category.title}/`} style={{textDecoration: 'none'}}>
            <Img alt="" sizes={category.categoryImage.sizes}>
            </Img>
        </Link>

        <p className={styles.categoryTitle}>
            <Link to={`/${category.title}/`} style={{textDecoration: 'none'}}>
                {category.title} {category.name}
            </Link>
    </p>


    </div>
)

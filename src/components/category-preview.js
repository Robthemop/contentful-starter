import React from 'react'
import Link from 'gatsby-link'
import styles from './category-preview.module.css'
import Img from "gatsby-image";

export default ({category}) => (
    <div>
        <Link to={`/${category.slug}/`}>
            <Img alt="" sizes={category.categoryImage.sizes}></Img>
            <h2 className={styles.categoryTitle}>
                {category.title}
            </h2>
        </Link>
    </div>

)

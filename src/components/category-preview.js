import React from 'react'
import Link from 'gatsby-link'
import styles from './category-preview.module.css'
import Img from "gatsby-image";

export default ({category}) => (
    <div>
        <Link to={`/${category.title}/`}>
            <Img alt="" sizes={category.categoryImage.sizes}></Img>
            <h2 className={styles.categoryTitle}>
                {category.title}
            </h2>
        </Link>

        <p className={styles.description}
           dangerouslySetInnerHTML={{
               __html: category.description.childMarkdownRemark.html,
           }}
        />
    </div>

)

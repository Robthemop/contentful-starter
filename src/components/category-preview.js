import React from 'react'
import Link from 'gatsby-link'
import styles from './category-preview.module.css'
import Img from "gatsby-image";

export default ({category}) => (
        <Link to={`/${category.title}/`}>
            <Img alt="" sizes={category.categoryImage.sizes}></Img>
                <h2 className={styles.categoryTitle}>
                    {category.title}
                </h2>

            <p className={styles.description}
               dangerouslySetInnerHTML={{
                   __html: category.description.childMarkdownRemark.html,
               }}
            />
        </Link>
)

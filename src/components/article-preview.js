import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({article}) => (
    <div className={styles.preview}>

        <Link to={`/blog/${article.slug}`} style={{textDecoration: 'none'}}>
            <Img alt="" sizes={article.heroImage.sizes}></Img>
        </Link>

        <h3 className={styles.previewTitle}>
            <Link to={`/blog/${article.slug}`}
                  style={{textDecoration: 'none'}}>
                {article.title}
            </Link>
        </h3>

        <small>
            <Link to={`/blog/${article.slug}`}
                  style={{textDecoration: 'none'}}>
                {article.publishDate}
            </Link>
        </small>

        <Link to={`/blog/${article.slug}`}
              style={{textDecoration: 'none'}}>
            <p
                dangerouslySetInnerHTML={{
                    __html: article.description.childMarkdownRemark.html,
                }}
            />
        </Link>
    </div>
)

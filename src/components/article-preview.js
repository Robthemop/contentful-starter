import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({article}) => (
    <div className={styles.preview}>
        <Link to={`/blog/${article.slug}`}>
        <Img alt="" sizes={article.heroImage.sizes}
             >
        </Img>
        </Link>
        <h3 className={styles.previewTitle}>
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <small>
            <Link to={`/blog/${article.slug}`}>
            {article.publishDate}
            </Link>
        </small>
        <Link to={`/blog/${article.slug}`}>
        <p
            dangerouslySetInnerHTML={{
                __html: article.description.childMarkdownRemark.html,
            }}
        />
        </Link>
    </div>
)

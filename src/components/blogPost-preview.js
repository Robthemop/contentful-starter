import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './blogPost-preview.module.css'

export default ({article}) => (
    <div className={styles.preview}>

        <Link to={`/vlog/${article.slug}`} style={{textDecoration: 'none'}}>
            <Img alt="" sizes={article.heroImage.sizes}></Img>
        </Link>
        <small>
            <Link to={`/vlog/${article.slug}`}
                  style={{textDecoration: 'none', color: "#F1582A"}}>
                {article.publishDate}
            </Link>
        </small>

        <h3 className={styles.previewTitle}>
            <Link to={`/vlog/${article.slug}`}
                  style={{textDecoration: 'none'}}>
                {article.title}
            </Link>
        </h3>

        <Link to={`/vlog/${article.slug}`}
              style={{textDecoration: 'none'}}>
            <p className={styles.description}
                dangerouslySetInnerHTML={{
                    __html: article.description.childMarkdownRemark.html,
                }}
            />
        </Link>
    </div>
)

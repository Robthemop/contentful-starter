import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from './article-preview.module.css';

export default ({article}) => (

    <div className={styles.preview}>

        <Link to={`/blog/${article.slug}`} style={{textDecoration: 'none', zIndex: 5}}>
            <Img alt="" sizes={article.picture.sizes}></Img>
        </Link>
        <Link to={`/blog/${article.slug}`}>
        <h3 className={styles.previewTitle}>
                {article.title}
        </h3>
    </Link>
            <p className={styles.description}
               dangerouslySetInnerHTML={{
                   __html: article.description.childMarkdownRemark.html,
               }}
            />

    </div>
)

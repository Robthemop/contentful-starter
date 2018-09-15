import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div style={{ background: '#000' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>
        <ul style={{ listStyleType: "none" }}>
        <li>
        <a href="https://www.youtube.com/channel/UC_wsnYRs8E7Z_ezOKIOfgow?view_as=user">Hier gibt es bald einen Video-Blog.</a>
        </li>
        <li>
        <a href="https://www.instagram.com/boulderbabos/">Bis dahin findest du alle Videos auf Instagram.</a>
        </li>
        </ul>
        </div>
        </div>
      )
  }
}

export default BlogIndex

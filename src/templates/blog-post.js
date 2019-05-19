import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Navigation from '../components/navigation'
import heroStyles from '../components/hero.module.css'
import Link from "gatsby-link";
import styles from '../components/category.module.css'


class BlogPostTemplate extends React.Component {
    render() {
        const post = get(this.props, 'data.contentfulBlogPost')
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')

        return (
            <div style={{background: '#FFF'}}>



                <div className="wrapper">


                    <Navigation/>

                    <Link to="/kategorien/"
                          style={{textDecoration: 'none'}}>
                        <h3>Alle Kategorien anzeigen</h3>
                    </Link>

                    <div>
                        <Link to={`/${post.category.title}/`}
                              style={{textDecoration: 'none'}}>
                            <h2 className="section-headline">{post.category.title}</h2>
                        </Link>
                    </div>

                    <Helmet title={`${post.title} | ${post.category.title}`}/>

                    <h2>{post.title}</h2>


                    <div className={heroStyles.p}
                         dangerouslySetInnerHTML={{
                             __html: post.body.childMarkdownRemark.html,
                         }}
                    />

                    <Link to="/kategorien/"
                          style={{textDecoration: 'none'}}>
                        <h2 className="section-bottomLine">Alle Kategorien anzeigen</h2>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      
      category{
        title
      }
      
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:255255") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      
      body {
        childMarkdownRemark {
          html
        }
      }
      
    }
  }
`

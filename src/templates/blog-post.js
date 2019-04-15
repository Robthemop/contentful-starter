import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Navigation from '../components/navigation'


import heroStyles from '../components/hero.module.css'
import Link from "gatsby-link";

class BlogPostTemplate extends React.Component {
    render() {
        const post = get(this.props, 'data.contentfulBlogPost')
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')

        return (
            <div style={{background: '#FFF'}}>
                <Navigation/>

                <Link to="/kategorien/"
                      style={{textDecoration: 'none'}}>
                    <h2 className="section-headline">Alle Kategorien</h2>
                </Link>

                <Link to={`/${post.category.title}/`}
                      style={{textDecoration: 'none'}}>
                    <h3>
                        {post.category.title}
                    </h3>
                </Link>

                <h2>{post.title}</h2>


                <Helmet title={`${post.title} | ${post.category.title}`}/>
                <div className={heroStyles.hero}>
                    <Img className={heroStyles.heroImage} alt={post.title} sizes={post.heroImage.sizes}/>
                </div>
                <div className="wrapper">

                    {/*<h2>
                        {post.publishDate}
                    </h2>*/}

                    <div className={heroStyles.p}
                         dangerouslySetInnerHTML={{
                             __html: post.body.childMarkdownRemark.html,
                         }}
                    />
                    <a href="https://www.bergfreunde.de/?pid=16093&_$ja=tsid:52154"
                       title="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen"
                       rel="nofollow" target="_blank"><img
                        src="https://www.bergfreunde-partner.de/banner/DE/DE_AF_Banner_468x60.jpg"
                        alt="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen"
                        border="0"
                        id="imgBF"
                    />
                    </a>
                    <img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=23&cpid=1&prid=1&subid=&view=1"
                         height="1"
                         width="1"
                         border="0"
                         id="imgBF"
                    />
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

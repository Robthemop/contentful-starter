import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Link from "gatsby-link";
import article from '../components/article-preview'

class BoulderSpots extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div style={{ background: '#fff' }}>

        <Helmet title={siteTitle} />
        <Hero data={author.node} />
        <Navigation />
          <Link to="/kategorien/"
                style={{textDecoration: 'none'}}>
              <h2 className="section-headline">Alle Kategorien</h2>
          </Link>
        <div className="wrapper">

            {/*
              <h1 className="section-headline">Der Blog für Boulderer</h1>
              */}


          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
          <a href="https://www.bergfreunde.de/?pid=16093&_$ja=tsid:52154"
          title="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen"
          rel="nofollow" target="_blank"><img src="https://www.bergfreunde-partner.de/banner/DE/DE_AF_Banner_468x60.jpg"
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

export default BoulderSpots

export const pageQuery = graphql`
  query BoulderSpots {
  
  allContentfulBlogPost(filter: {category: {contentful_id: {eq:"5Yqtk99s2c0YgC8QsMceGc"} } },
  sort: { fields: [publishDate], order: DESC })
  {
  
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: PAD) {
             ...GatsbyContentfulSizes_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          heroImage: image {
            sizes(
              maxWidth: 3728
              maxHeight: 2376
              resizingBehavior: PAD
              background: "rgb:FFFFFF"
            ) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
